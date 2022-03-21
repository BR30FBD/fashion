import Footer from "./footer";
import Header from "./header";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Breadcrumb from "./common/breadcrumb";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Shopcart from "./pages/shopcart";
import Checkout from "./pages/checkout";
import Blogdetail from "./pages/blogdetail";
import Login from "./pages/login";
import Search from "./common/search";
import Notification from "./pages/notification";
import Favourite from "./pages/favourite";
import Aboutus from "./pages/aboutus";
import Datanot from "./common/datanot";

function App() {
  const [productsData, setdata] = useState(null);
  const dataget = () => {
    fetch("./database/products.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(pro) {
        setdata(pro);
      });
  };
  useEffect(() => dataget(), []);

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home productsData={productsData} />} />
          <Route path="/breadcrumb" element={<Breadcrumb />} />

          <Route path="/shop" element={<Shop shopdata={productsData} />} />
          <Route path="/blog" element={<Blog blog={productsData} />} />
          <Route path="/contact" element={<Contact contact={productsData} />} />
          <Route path="/product" element={<Product product={productsData} />} />
          <Route path="/search" element={<Search />} />

          <Route path="/shopcart" element={<Shopcart skart={productsData} />} />
          <Route path="/checkout" element={<Checkout check={productsData} />} />
          <Route path="/about" element={<Aboutus check={productsData} />} />
          <Route path="/*" element={<Datanot/>} />


          <Route
            path="/blog-details"
            element={<Blogdetail bd={productsData} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/favourite" element={<Favourite/>} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;