import React from "react";
import FAQ from "./FAQ";
import Slider from "./Slider";
import CarsList from "./CarsList";
import Feedback from "./Feedback";

function Index({ minimal }) {
  return (
    <>
      <div style={{display: minimal === true ? 'none': '' }}>
        <FAQ />
      </div>
      <div style={{display: minimal === true ? 'none': '' }}>
        <Slider />
      </div>
      <div style={{display: minimal === true ? 'none': '' }}>
        <CarsList />
      </div>
      <div>
        <Feedback />
      </div>
    </>
  );
}

export default Index;
