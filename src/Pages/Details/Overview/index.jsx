import React from "react";
import Table from "./Table";
import { Col, Row } from "reactstrap";

function index() {
  return (
    <>
      <div className="mt-5">
        <h4>
          Overviews
          <img
            src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
            alt="line"
            width="50"
            className="mx-2"
          ></img>
        </h4>
      </div>

      <div
        style={{ border: "1px solid #f3f6f9", borderRadius: "15px" }}
        className="p-3"
      >
        <Row>
          <Col xxl={8}>
            <Table />
          </Col>
          <Col xxl={4}>
            <div className="">
              <h4>
                Recently Used Cars
                <img
                  src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                  alt="line"
                  width="50"
                  className="mx-2"
                ></img>
              </h4>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default index;
