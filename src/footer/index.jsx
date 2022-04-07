import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="./index.html">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt cilisis.
                </p>
                <div className="footer__payment">
                  <a href="/#">
                    <img src="assets/img/payment/payment-1.png" alt="" />
                  </a>
                  <a href="/#">
                    <img src="assets/img/payment/payment-2.png" alt="" />
                  </a>
                  <a href="/#">
                    <img src="assets/img/payment/payment-3.png" alt="" />
                  </a>
                  <a href="/#">
                    <img src="assets/img/payment/payment-4.png" alt="" />
                  </a>
                  <a href="/#">
                    <img src="assets/img/payment/payment-5.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li>
                    <NavLink to="/favourite">My Account</NavLink>
                  </li>
                  <li>
                    <NavLink to="/favourite">Orders Tracking</NavLink>
                  </li>
                  <li>
                    <NavLink to="/checkout">Checkout</NavLink>
                  </li>
                  <li>
                    <NavLink to="/favourite">Wishlist</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="/#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__social">
                  <a href="/#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-youtube-play" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright__text">
                <p>
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a href="https://webgalaxies.github.io/CV/"  rel="noopener noreferrer">
                    WebGalaxies
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;