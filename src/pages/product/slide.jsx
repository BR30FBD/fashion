
   
import React from "react";
import Slider from "react-slick";

const Slide = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="col-lg-6">
        <div className="product__details__pic">
          <div className="product__details__pic__left product__thumb nice-scroll">
            <a className="pt active" href="/#product-1">
              <img src="assets/img/product/details/thumb-1.jpg" alt="" />
            </a>
            <a className="pt" href="/#product-2">
              <img src="assets/img/product/details/thumb-2.jpg" alt="" />
            </a>
            <a className="pt" href="/#product-3">
              <img src="assets/img/product/details/thumb-3.jpg" alt="" />
            </a>
            <a className="pt" href="/#product-4">
              <img src="assets/img/product/details/thumb-4.jpg" alt="" />
            </a>
          </div>

          <div className="product__details__slider__content ">
            {/* <Slider/> */}
            <div className="">
              <Slider {...settings}>
                <div>
                  <img
                    data-hash="product-1"
                    className="product__big__img"
                    src="assets/img/product/details/product-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    data-hash="product-2"
                    className="product__big__img"
                    src="assets/img/product/details/product-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    data-hash="product-3"
                    className="product__big__img"
                    src="assets/img/product/details/product-2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    data-hash="product-4"
                    className="product__big__img"
                    src="assets/img/product/details/product-4.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;