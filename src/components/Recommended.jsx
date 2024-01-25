import React from "react";
import "./Recommended.css";
import think from "../assets/man-thinking.png";

const Recommended = () => {
  return (
    <div className="recommended mt-5">
      <div className="recommend">
        <div className="car-recommend">
          <div className="text">
            <h3>Recommended Car</h3>
            <h1>Not sure, Which Car is Best?</h1>
          </div>
          <img
            src={
              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/recommended-img.png"
            }
            alt="think"
            width='500'
            className="img-fluid"
          />
        </div>
        <div className="btn-p">
          <p>
            A car that is dependable and has a low risk of breakdowns is highly
            desirable.
          </p>
          <button>Show me best car</button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
