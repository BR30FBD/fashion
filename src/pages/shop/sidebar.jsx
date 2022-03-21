import React from "react";
import Categories from "./Categories";
import ColorsFilter from "./ColorsFilter";
import PriceFilter from "./PriceFilter";
import SizesFilter from "./SizesFilter";

const Sidebar = () => {
  return (
    <div className="col-lg-3 col-md-3">
      <div className="shop__sidebar">
        <Categories />
        <PriceFilter />
        <SizesFilter />
        <ColorsFilter />
      </div>
    </div>
  );
};

export default Sidebar;