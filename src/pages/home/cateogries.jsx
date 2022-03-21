import React, { useState, useEffect } from "react";
import ProductCard from "../../common/productCard";
import Modal from "../../common/modal";

const Cateogries = () => {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [modalIMg, setModalImg] = useState(null);
  const getData = () => {
    fetch("./database2/products.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(pro) {
        setProducts(pro.products);
        setFilterData(pro.products);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handalItem = (ele) => {
    const updateItem = products.filter((currentelement) => {
      return currentelement.cateogry === ele;
    });
    setFilterData(updateItem);
  };
  return (
    <>
      <section className="product spad ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>New product</h4>
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls" style={{display:"flex",justifyContent:"space-around"}}>
                <li
                  className="active"
                  data-filter="*"
                  onClick={() => setFilterData(products)}
                >
                  All
                </li>
                <li data-filter=".women" onClick={() => handalItem("women")}>
                  Women’s
                </li>
                <li data-filter=".men" onClick={() => handalItem("men")}>
                  Men
                </li>
                <li data-filter=".kid" onClick={() => handalItem("men")}>
                  Kid’s
                </li>
                <li
                  data-filter=".accessories"
                  onClick={() => handalItem("accessories")}
                >
                  Accessories
                </li>
                <li
                  data-filter=".cosmetic"
                  onClick={() => handalItem("women")}
                >
                  Cosmetics
                </li>
              </ul>
            </div>
          </div>
          <div className="row property__gallery">
            {filterData.length > 0 ? (
              filterData.map((product, index) => (
                <ProductCard
                  product={product}
                  key={index}
                  showModal={setModalImg}
                />
              ))
            ) : (
              <h1>No Content</h1>
            )}
          </div>
          {modalIMg && <Modal bgImg={modalIMg} />}
        </div>
      </section>
    </>
  );
};
export default Cateogries;