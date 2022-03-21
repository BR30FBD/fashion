import React from "react";

const Instagram = (props) => {
  return (
    <>
      <div className="instagram">
        <div className="container-fluid">
          <div className="row">
            {props.insta.map((product,index) => (
              <div  key={index}className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  style={{ backgroundImage: `url("${product.imgsrc}")` }}
                  data-setbg="img/instagram/insta-1.jpg"
                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram"></i>
                    <a href="nit">@ ashion_shop</a>
                  </div>
                </div>
              </div>
            ))}
          
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;