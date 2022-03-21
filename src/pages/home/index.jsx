import React from "react";
import HeroSection from "./HeroSection";
import Banner from "./banner";
import Trend from "./trend";
import Discount from "./discount";
import Service from "./service";
import Instagram from "../../common/instagram";
import Cateogries from "./cateogries";

const Home = (props) => {

  return (
    <>
      <HeroSection />
      <Cateogries/>
      <Banner />
      <Trend />
      <Discount />
      <Service />
      {
        props.productsData &&
        <Instagram insta={props.productsData.instagram} />
      }
    </>
  );
};

export default Home;