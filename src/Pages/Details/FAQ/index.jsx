import React from "react";

import { Col, Row } from "reactstrap";
import Accordion from "./Accordion";

function index() {
  return (
    <>
      <div>
        <div className="mt-5">
          <h4>
            FAQ’s & Latest Answer
            <img
              src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
              alt="line"
              width="50"
              className="mx-2"
            ></img>
          </h4>
        </div>

        <div className="p-3">
          <Row>
            <Col xxl={8} style={{border: '1px solid #e0e0e0', borderRadius: '10px'}}>
                <Accordion />
            </Col>
            <Col xxl={4}></Col>
          </Row>
        </div>
        {/* <div className="mt-5">
          <h4>
            Engine Performance
            <img
              src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
              alt="line"
              width="50"
              className="mx-2"
            ></img>
          </h4>
        </div> */}

        {/* <div
        
          className="p-3"
        >
          <Row>
            <Col
              xxl={8}
            
            >
            table
            </Col>
            <Col xxl={4}></Col>
          </Row>
        </div> */}
      </div>
    </>
  );
}

export default index;
