import React from "react";
import "./style.css";
const Aboutus = () => {
  return (
    <>
      <div className="aboutus-area">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="aboutus-image float-left hidden-sm">
                  <img
                    style={{ width: "800px", height: "400px" }}
                    src="assets/img/blog/blog-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-12">
                <div className="aboutus-content ">
                  <h1>
                    aboutus <span>Ashion</span>
                  </h1>
                  <h4>Details</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate, similique modi deserunt eum dicta minus vel.
                    Architecto, laboriosam illum magnam in rerum distinctio
                    dolore, asperiores itaque tempore neque iusto quibusdam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere ex soluta obcaecati pariatur at voluptatibus magnam a
                    sequi laboriosam, doloribus ut sunt eum molestiae aperiam
                    explicabo aut beatae quasi voluptate.
                  </p>

                  <div className="counter ">
                    <div className="single-counter text-center">
                      <h2 className="counter">1500+</h2>
                      <p>Products Available</p>
                    </div>

                    <div className="single-counter text-center">
                      <h2 className="counter">10</h2>
                      <p>Sell Daily</p>
                    </div>

                    <div className="single-counter text-center">
                      <h2 className="counter">5</h2>
                      <p>Rating</p>
                    </div>

                    <div className="single-counter text-center">
                      <h2 className="counter">6</h2>
                      <p>Message</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;