import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb";
import Instagram from "../../common/instagram";
import Modal from "../../common/modal";
import ProductCard from "../../common/productCard";
import Pagination from "./pagination";
import Sidebar from "./sidebar";
import './style.css'

const Shop = (props) => {
  const [shopData, setData] = useState([]);
  const [slice, setSlice] = useState([]);
  const [sliceIndex,setSliceIndex]=useState(0);
  const [modalImg, setModalImg]=useState(null);
  

  const dataget = () => {
    fetch("./database2/products.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(pro) {
        setData(pro.products);
      });
  };

  

  useEffect(() => {
    const handleSlice = () => {
      const multiD = shopData.reduce((arry, item, index) => {
        const result = Math.floor(index / 9);
        if (!arry[result]) {
  
          arry[result] = [];
        }
        arry[result].push(item);
        return arry;
      }, []);
      setSlice(multiD);
    }
    handleSlice();
    
  }, [shopData]);
  useEffect(() => {
    dataget();
  }, []);
  return (
    <>
     
      <Breadcrumb />
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-9">
              <div className="row">
                {slice.length > 0 ? (
                  slice[sliceIndex].map((product, index) => (
                      <div key={index} className="col-lg-4 col-md-6">
                        <ProductCard product={product}  showModal={setModalImg}/>
                      </div>
                    ))
                ) : (
                  <div>
                  {
                    <div id="preloder">
                      <div className="loader" />
                    </div>
                    
                  }
                  </div>
                  
                )}
                <Pagination slice={slice} setSliceIndex={setSliceIndex} currentIndex={sliceIndex} />
              </div>
              { modalImg &&
              <Modal bgImg={modalImg}/>
}
            </div>
          </div>
        </div>
      </section>
      {props.shopdata && <Instagram insta={props.shopdata.instagram} />}
    </>
  );
};

export default Shop;