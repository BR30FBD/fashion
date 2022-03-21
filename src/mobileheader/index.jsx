import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";


function Mobileheader() {
    const [dis,setdisplay]=useState('none')
    const [position,setposition]=useState('►')
  return (
    <>
    
       
        <ul className="offcanvas__widget">
          <li>
              <NavLink to="/search">
            <span className="icon_search search-switch"></span>
            </NavLink>
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
        <div className="offcanvas__logo">
          <NavLink to="/">
            <img src="assets/img/logo.png" alt="" />
          </NavLink>
        </div>
        <div id="mobile-menu-wrap">
            <div className="slicknav_menu">
              <NavLink to='/'
                aria-haspopup="true"
                role="button"
                tabIndex="0"
                className="slicknav_btn"
                style={{ outline: "none" }}
              >
                <span className="slicknav_menutxt">MENU</span>
                <span className="slicknav_icon">
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                </span>
              </NavLink>
              <nav
                className="slicknav_nav slicknav_hidden"
                aria-hidden="true"
                role="menu"
                style={{ display: `${dis}` }}
              >
                <ul>
                  <li className="active">
                    <NavLink to="/" role="menuitem">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" role="menuitem">
                      Women’s
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" role="menuitem">
                      Men’s
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop" role="menuitem">
                      Shop
                    </NavLink>
                  </li>
                  <li className="slicknav_collapsed slicknav_parent">
                    <NavLink
                      to="/"
                      role="menuitem"
                      aria-haspopup="true"
                      tabIndex="-1"
                      className="slicknav_item slicknav_row"
                      style={{ outline: "none" }}
                    >
                      <b onClick={()=>
                    setdisplay('block') || setposition('▼')
                    }>Pages</b>
                      <span className="slicknav_arrow" onClick={()=>
                    setdisplay('none') || setposition('►')
                    }>{position}</span>
                    </NavLink>
                    <ul
                      className={`dropdown slicknav_hidden d-${dis}`}


                      
                      role="menu"
                      aria-hidden="false"
                    >
                      <li>
                        <NavLink
                          to="/product"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Product Details
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/shopcart"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Shop Cart
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/checkout"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Checkout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog-details"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Blog Details
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/blog" role="menuitem">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contact" role="menuitem">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        <div id="mobile-menu-wrap" />
        <div className="offcanvas__auth">
          <NavLink to="/login">Login/Register</NavLink>

        </div>
    </>
  );
}

export default Mobileheader;