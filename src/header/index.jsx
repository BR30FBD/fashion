import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";
import Mobileheader from "../mobileheader";

const Header = () => {
  const [menu, setmenu] = useState([]);
  const [stickey, setStickey] = useState(0);
  let prevousScroll = window.pageYOffset;
  document.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (prevousScroll > currentScroll) {
      setStickey(0);
    } else {
      setStickey(-100);
    }
    prevousScroll = currentScroll;
  });

  return (
    <>
     

      <div className={`offcanvas-menu-overlay ${menu}`}  onClick={()=>setmenu('null')}/>
      <div
        className={`offcanvas-menu-wrapper ${menu}`}
        style={{ zIndex: "1000" }}
      >
        <div
          className="offcanvas__close"
          onClick={() => {
            setmenu("null");
          }}
        >
          +
        </div>
        {<Mobileheader menu={menu} />}
      </div>
      <header className="header" style={{ marginTop: `${stickey}px` }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <NavLink to="/">
                  <img src="assets/img/logo.png" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Women</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Men's</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li>
                    <span style={{color:"black"}}>Pages</span>
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/product">Product Dtails</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shopcart">Shop Cart</NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout">Checkout</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-details">Blog Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="Contact">Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <NavLink to="/login">Login/Register</NavLink>
                </div>
                <ul className="header__right__widget">
                  <li>
                  <NavLink to='/search'>

                    <span className="icon_search search-switch" />
                    </NavLink>
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
                  </li>
                  <li>
                    <NavLink to="/favourite">
                      <span className="icon_heart_alt" />
                      <div className="tip">2</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/notification">
                      <span className="icon_bag_alt" />
                      <div className="tip">2</div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open" onClick={() => setmenu("active")}>
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;