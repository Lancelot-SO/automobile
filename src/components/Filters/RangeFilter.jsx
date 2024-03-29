import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import data from "../../utils/Products";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "100%",
    color: 'red',
    height: "40px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const RangeFilter = ({ setFilterList }) => {
  const products = data();
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
    setFilterList(products.filter((item) => item.price >= value[0] && item.price <= value[1]));
  };

  return (
    <div className="mt-5 mx-1 home p-4" style={{borderRadius: '10px'}}>
      <div style={{ marginTop: "20px" }}>
      <h4 className="fw-bolder">Price</h4>
        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={handleSliderChange}
          style={{width: ''}}
          className="w-50 mt-4"
        />
        <div style={{ textAlign: "center", color: "gray" }} className="text-start mt-3">
         Price: &#x20B5;{priceRange[0]} - &#x20B5;{priceRange[1]}
        </div>
      </div>
    </div>
  );
};

export default RangeFilter;
