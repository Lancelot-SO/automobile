import React from "react";
import { Col, Row } from "reactstrap";
import ImageSlider from './Slider'

function index() {
  return (
    <>
      <div className="m-5">
        <Row>
          <Col xxl={9}><ImageSlider /></Col>
          <Col xxl={3}>4</Col>
        </Row>
      </div>
    </>
  );
}

export default index;
