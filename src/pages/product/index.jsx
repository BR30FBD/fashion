import React from "react";
import Instagram from "../../common/instagram";
import Slide from "./slide";
import Abutproduct from "./abutproduct";

const Product = (props) => {
  return (
    <>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="./index.html">
                  <i className="fa fa-home"></i> Home
                </a>
                <a href="/#">Women`s </a>
                <span>Essential structured blazer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <Slide />
            <Abutproduct />
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="/#tabs-1"
                      role="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="/#tabs-2"
                      role="tab"
                    >
                      Specification
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="/#tabs-3"
                      role="tab"
                    >
                      Reviews ( 2 )
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Description</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs2" role="tabpanel">
                    <h6>Specification</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <h6>Reviews ( 2 )</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet,knnknugyfvyfvyhvhvvyvgv
                      consectetuer adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus.
                      Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>RELATED PRODUCTS</h5>
              </div>
            </div>
            {props.product &&
              props.product.productdetail.map((product, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{ backgroundImage: `url("${product.imgsrc}")` }}
                      data-setbg="img/product/related/rp-1.jpg"
                    >
                      <div className="label new">New</div>
                      <ul className="product__hover">
                        <li>
                          <a
                            href="assets/img/product/related/rp-1.jpg"
                            className="image-popup"
                          >
                            <span className="arrow_expand"></span>
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
                      </div>
                      <div className="product__price">$ {product.price}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {props.product && <Instagram insta={props.product.instagram} />}
    </>
  );
};

export default Product;