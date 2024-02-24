import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import RelatedParts from "../../components/common/Band/Slider/RelatedParts";

function index() {
  return (
    <>
      <Row1 />
      <Row2 />
      <div className="container">
        <RelatedParts />
      </div>
    </>
  );
}

export default index;
