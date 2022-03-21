import React from "react";

const Favourite = () => {
  return (

    <div className="container" style={{ marginTop: "86px" }}>
      <div className="row">
        <div className="col-md-3">
          <div className="osahan-account-page-left shadow-sm bg-white h-100">
            <div className="border-bottom p-4">
              <div className="osahan-user text-center">
                <div className="osahan-user-media">
                  <img
                    className="mb-3 rounded-pill shadow-sm mt-1"
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="img not found"
                  />
                  <div className="osahan-user-media-body">
                    <h6 className="mb-2">John Doe</h6>
                    <p className="mb-1">+91 85680-79956</p>
                    <p>bootdey@bootdey.com</p>
                    <p className="mb-0 text-black font-weight-bold">
                      <a
                        className="text-primary mr-3"
                        data-toggle="modal"
                        data-target="#edit-profile-modal"
                        href="/#"
                      >
                        <i className="icofont-ui-edit"></i> EDIT
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="favourites-tab"
                  data-toggle="tab"
                  href="#favourites"
                  role="tab"
                  aria-controls="favourites"
                  aria-selected="false"
                >
                  <i className="icofont-heart"></i> Favorites
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade  active show"
                id="favourites"
                role="tabpanel"
                aria-labelledby="favourites-tab"
              >
                <h4 className="font-weight-bold mt-0 mb-4">Favorites</h4>
                <div className="row">
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-success">
                            <i className="icofont-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="/#">
                            <i className="icofont-heart"></i>
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="/#">
                          <img
                            src="img/list/4.png"
                            className="img-fluid item-img"
                            alt="jugnygyf"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="/#" className="text-black">
                              Product 1
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            Category 1, Category 2, Another category
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock"></i> 15–30 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $350 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small> Use Coupon OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-success">
                            <i className="icofont-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="/#">
                            <i className="icofont-heart"></i>
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="/#">
                          <img
                            src="img/list/5.png"
                            className="img-fluid item-img"
                            alt="huygyg"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="/#" className="text-black">
                              Product 2
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            Category 1, Category 2, Another category
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock"></i> 30–35 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-success">OFFER</span>{" "}
                          <small>65% off</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-success">
                            <i className="icofont-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="/#">
                            <i className="icofont-heart"></i>
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="/#">
                          <img
                            src="img/list/6.png"
                            className="img-fluid item-img"
                            alt="huyuygugyug"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="/#" className="text-black">
                              Product 3
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            Category 1, Category 2, Another category
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock"></i> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $500 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-success">
                            <i className="icofont-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="/#">
                            <i className="icofont-heart"></i>
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="/#">
                          <img
                            src="img/list/7.png"
                            className="img-fluid item-img"
                            alt="bftftt"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="/#" className="text-black">
                              Product 4
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            Category 1, Category 2, Another category
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock"></i> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% Coupon OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-success">
                            <i className="icofont-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="/#">
                            <i className="icofont-heart"></i>
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="/#">
                          <img
                            src="img/list/8.png"
                            className="img-fluid item-img"
                            alt="huygygy"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="/#" className="text-black">
                              Product 5
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            Category 1, Category 2, Another category
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock"></i> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small> Coupon OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-success">
                            <i className="icofont-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="/#">
                            <i className="icofont-heart"></i>
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="/#">
                          <img
                            src="img/list/9.png"
                            className="img-fluid item-img"
                            alt="gfgfh"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="/#" className="text-black">
                              Product 6
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            Category 1, Category 2, Another category
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock"></i> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 text-center load-more">
                    <button
                      className="btn btn-primary"
                      type="button"
                      disabled=""
                    >
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>{" "}
                      Loading...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;