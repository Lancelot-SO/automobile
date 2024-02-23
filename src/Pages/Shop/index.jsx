import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Band from '../../components/common/Band/index'

function index() {
  return (
    <>
      <Row1 />
      <Row2 />
     <div className="container">
     <Band minimal={true}/>
     </div>
    </>
  );
}

export default index;
