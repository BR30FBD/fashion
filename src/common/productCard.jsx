import React from "react";

const ProductCard = ({ product, showModal }) => {
  return (
    <>

      <div className="col-lg-3 col-md-4 col-sm-6 mix container-fluid " style={{display:"flex",justifyContent:"center"}}>
        <div className="product__item ">
          <div
            className="product__item__pic set-bg"
            style={{
              backgroundImage: `url("${product.imgsrc}")`,
              zindex: "1",
            }}
          >
            <div className="label new">New</div>
            <ul className="product__hover">
              <li>
                <a href="/#"
                  
                  className="image-popup"
                  onClick={() => showModal(product.imgsrc)}
                >
                  <span
                    className="arrow_expand btn "
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  ></span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span className="icon_heart_alt"></span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span className="icon_bag_alt"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
              <a href="/#">{product.name}</a>
            </h6>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              {/* {
                            Array.apply(null,Array(+product.review)).map((index)=>(<i key={index} className="fa fa-star"></i>))
                        } */}
            </div>
            <div className="product__price">$ {product.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;