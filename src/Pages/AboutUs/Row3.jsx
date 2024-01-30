import React from "react";
import { Container, Card } from "reactstrap";

function Row3() {
  return (
    <>
      <div className="home">
        <Container className="p-5">
          <div>
            <div className="text-center">
              <p style={{ color: "#00d084" }} className="">
                Best Car Agency
              </p>
              <h4>Why Only Choose Drivco</h4>
            </div>

            <div className="mt-5 text-center">
              <div
                className="d-flex "
                style={{ justifyContent: "space-between" }}
              >
                <Card style={{ boxShadow: "none" }} className="py-5">
                  <div className="text-start">
                    <p className="fs-3 fw-bolder">
                      {" "}
                      <div className="d-flex gap-2">
                        <div>
                          <img
                            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/affordable.svg"
                            alt="img"
                          ></img>{" "}
                        </div>
                        <div style={{ color: "#00d084" }}>Affordable</div>
                        <div>Price</div>
                      </div>
                    </p>
                  </div>
                  <div>
                    <p
                      className="fs-5 fw-lighter text-start"
                      style={{ color: "gray" }}
                    >
                      An affordable price for a luxury car may be significantly
                      higher than an affordable price for a budget car...
                    </p>
                  </div>
                </Card>
                <Card style={{ boxShadow: "none" }} className="py-5">
                  <div className="text-start">
                    <img
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/guarantee.svg"
                      alt="img"
                    ></img>{" "}
                    
                 
                   
                  </div>
                  <div>
                    <p
                      className="fs-5 fw-lighter text-start"
                      style={{ color: "gray" }}
                    >
                      Some may offer a full refund with no questions asked,
                      others may require the customer to provide...
                    </p>
                  </div>
                </Card>
                <Card style={{ boxShadow: "none" }} className="py-5">
                  <div className="text-start">
                    <p className="fs-3 fw-bolder">
                      {" "}
                      <div className="d-flex gap-2">
                        <div>
                          <img
                            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/warranty.svg"
                            alt="img"
                          ></img>{" "}
                        </div>
                        <div style={{ color: "#00d084" }}>8 Month</div>
                        <div>Warranty</div>
                      </div>
                    </p>
                  </div>
                  <div>
                    <p
                      className="fs-5 fw-lighter text-start"
                      style={{ color: "gray" }}
                    >
                      During this 8-month period, if the product fails to
                      function properly due to a defect or malfunction...
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Row3;
