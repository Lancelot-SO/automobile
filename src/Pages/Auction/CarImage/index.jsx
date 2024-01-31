import React, { useState } from "react";
import { Col, Row, Input } from "reactstrap";
import ImageSlider from "./Slider";
import { Button } from "reactstrap";
import { ReactComponent as Panelleft } from "../../../assets/svg/panelLeft.svg";
import { ReactComponent as Panelright } from "../../../assets/svg/panelRight.svg";
import { ReactComponent as VideoClip } from "../../../assets/svg/videosclip.svg";
import { ReactComponent as Interior } from "../../../assets/svg/interior.svg";
import { ReactComponent as Exterior } from "../../../assets/svg/exterior.svg";
import { ReactComponent as Colors } from "../../../assets/svg/colors.svg";
import { ReactComponent as Check } from "../../../assets/svg/check.svg";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="mt-2 mb-5">
        <Row>
          <Col xxl={8}>
            <div>
              <ImageSlider />

              {/* menu */}
              <div
                className="mt-3 d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                >
                  <Panelright />
                  <p>
                    <Exterior className="mx-2" />
                    Exterior (10)
                  </p>
                  <Panelleft />
                </div>
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                >
                  <Panelright />
                  <p>
                    <Interior className="mx-2" /> Interior (15)
                  </p>
                  <Panelleft />
                </div>
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                >
                  <Panelright />
                  <p>
                    {" "}
                    <VideoClip className="mx-2" />
                    Video Clip
                  </p>
                  <Panelleft />
                </div>
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                >
                  <Panelright />
                  <p>
                    {" "}
                    <Colors className="mx-2" />
                    Colors
                  </p>
                  <Panelleft />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4>
                Car Info
                <img
                  src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                  alt="line"
                  width="50"
                  className="mx-2"
                ></img>
              </h4>
            </div>

            <div
              className="mt-3 d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/mileage.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    25,100 miles
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Mileage
                    </p>
                  </p>
                </div>
              </div>
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/engine.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    22,231 cc
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Engine
                    </p>
                  </p>
                </div>
              </div>
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/fuel.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    Petrol + Gas
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Fuel Type
                    </p>
                  </p>
                </div>
              </div>
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/condition.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    Used Car
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Condition
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4>
                Key Features
                <img
                  src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                  alt="line"
                  width="50"
                  className="mx-2"
                ></img>
              </h4>
            </div>

            <div className="text-start">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Wheel
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Moonroof
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Audio
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Navigation
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Front Heated Seats
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Seat Material
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Bluetooth
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Seat Material
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Front Heated Seats
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Remote Engine Start
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Blind Spot System
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Multi-Zone Climate Control
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={4}>
            <div className="w-100 d-flex gap-1 mt-5 text-center justify-content-center align-items-center">
              {" "}
              <div
                className="fw-bolder fs-5 p-3"
                style={{ backgroundColor: "#e5e6ec", borderRadius: "10px" }}
              >
                00D
              </div>
              <div className="fs-5 p-3 fw-bolder">:</div>
              <div
                className="fw-bolder fs-5 p-3"
                style={{ backgroundColor: "#e5e6ec", borderRadius: "10px" }}
              >
                00H
              </div>
              <div className="fs-5 p-3 fw-bolder">:</div>
              <div
                className="fw-bolder fs-5 p-3"
                style={{ backgroundColor: "#e5e6ec", borderRadius: "10px" }}
              >
                00M
              </div>
              <div className="fs-5 p-3 fw-bolder">:</div>
              <div
                className="fw-bolder fs-5 p-3"
                style={{ backgroundColor: "#e5e6ec", borderRadius: "10px" }}
              >
                00S
              </div>
            </div>

            <div className="mt-3">
              <div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="mt-3 fw-bolder">Starting Bids</div>
                  <div>
                    <img
                      src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                      alt="line"
                      width="50"
                      className="mx-2"
                    ></img>
                  </div>
                  <div className="mt-3">GHC 23,323.000</div>
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="mt-3 fw-bolder">Total Bids</div>
                  <div>
                    <img
                      src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                      alt="line"
                      width="50"
                      className="mx-2"
                    ></img>
                  </div>
                  <div className="mt-3">10 Person</div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button
                style={{
                  backgroundColor: "#00d084",
                  border: "none",
                  color: "black",
                }}
                className="w-100 p-3 fw-bolder"
                onClick={toggleModal}
              >
                Place Bids
              </Button>
            </div>

            <Modal isOpen={modalOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal} style={{ border: "none" }} className="mt-4">
                Now, Your Bidding Time
              </ModalHeader>
              <ModalBody>
                <div>
                  <label>Your Bidding Amount*</label>
                  <input
                    type="email"
                    className="form-control p-3"
                    id="exampleFormControlInput1"
                    placeholder="Amounts"
                  />
                </div>

                <div className="fw-bolder fs-5 mt-5">Your Personal Info</div>

                <div className="mt-3">
                  <label className="fw-lighter">Full Name*</label>
                  <input
                    type="email"
                    className="form-control p-3"
                    id="exampleFormControlInput1"
                    placeholder="Amounts"
                  />
                </div>

                <Row className="mt-1">
                  <Col xxl={6}>
                    <div className="mt-3">
                      <label className="fw-lighter">Phone Number*</label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Phone Number"
                      />
                    </div>
                  </Col>
                  <Col xxl={6}>
                    <div className="mt-3">
                      <label className="fw-lighter">Email*</label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      />
                    </div>
                  </Col>
                </Row>

                <div className="mt-2">
                  <label for="biddingAmount" className="fw-lighter">
                    Your Bidding Amount*
                  </label>
                  <Input
                    type="textarea"
                    name="biddingAmount"
                    id="biddingAmount"
                  />
                </div>
              </ModalBody>
              <div className="mx-3">
                <Button
                  style={{
                    backgroundColor: "#00d084",
                    border: "none",
                    color: "black",
                  }}
                  className="w-100 p-3 fw-bolder"
                  onClick={toggleModal}
                >
                  Place Bids
                </Button>
              </div>
              <ModalFooter style={{ border: "none" }}></ModalFooter>
            </Modal>

            <div className="mt-4">
              <div
                style={{
                  background:
                    "linear-gradient(30deg, #ebd3d3, #e8edef, #a8dcbe, #becdd5)",
                  borderRadius: "10px",
                }}
                className="p-2 py-4"
              >
                <div className="mx-3 p-4">
                  <h3>To More Enquiry</h3>
                  <p className="fw-ligther">
                    If choose this car to contact easily with us.
                  </p>

                  <form>
                    <div className="mb-3 mt-4">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Name*
                      </label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-3 mt-4">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Ex-info@gmail.com"
                      />
                    </div>
                    <div className="mb-3 mt-4">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Phone*
                      </label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="(+233) 000 000 000"
                      />
                    </div>
                    <div className="mb-3 mt-4">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Message*
                      </label>
                      <textarea
                        className="form-control p-3"
                        id="exampleFormControlTextarea1"
                        placeholder="Write your message here..."
                        rows="3"
                      ></textarea>
                    </div>

                    <Button
                      className="btn btn-dark text-dark w-100 p-3 fw-bolder"
                      style={{ backgroundColor: "#00d084", border: "none" }}
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Index;
