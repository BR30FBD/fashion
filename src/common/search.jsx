import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Search = () => {
    const [display,setdisplay]=useState('block')
  return (
    <>
      <div className="search-model" style={{display: `${display}`}}>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch" onClick={()=>setdisplay('none')}>
              <NavLink to='/'>
              +
</NavLink>
              </div>
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

export default Search;