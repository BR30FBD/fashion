import React,{useState} from "react";
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography';
const PriceFilter = () => {
  const [value, setValue] =useState([1,100]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
     
    <div className="sidebar__filter">
      <div className="section-title">
        <h4>Shop by price</h4>
      </div>
    
      <div className="filter-range-wrap">
     
         <div style={{
      // margin: 'auto',
      marginRight:"0px",
      display: 'block',
    }}>
      {/* <h3>How to create Price Range Selector in ReactJS?</h3> */}
      <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        style={{color:"red"}}
      />
      {/* <input type="number" value={value[0]} style={{width:"40px"}}/>$- <input type="number" value={value[1]} style={{width:"40px"}}/>$ */}
      <div style={{display:"flex"}}>
        <div style={{width:"40px",Border:"3px red"}}>{value[0]}$</div>
        <div>-</div>
        <div style={{width:"40px"}}>{value[1]}$</div>

      </div>
    </div><br/>
    <br/>
      <a href="/">Filter</a>
    </div>
    </div>
  );
};

export default PriceFilter;