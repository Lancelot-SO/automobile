import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import google from "../assets/google.png";
import car from "../assets/car.png";
import { Container, Col, Row, Card, CardBody } from "reactstrap";

import { SlSpeedometer } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";
import { IoStar, IoStarHalf } from "react-icons/io5";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div data-aos="zoom-in-down" className="home">
      {/* <div className='home-left'>
                <div className='speed'>
                    <span style={{color: '#00d084', fontFamily: 'monospace', fontSize: '1.5rem'}}>Fastest Speed</span>
                    <SlSpeedometer size={25} style={{color: '#00d084', fontFamily: 'monospace', fontSize: '0.9rem'}} />
                </div>
                <div className='home-title'>
                    <h1>For Best Way Buy <br />Dream Car.</h1>
                    <p>Car dealerships may sell new cars from one or several manufacturers, as well as used cars from a variety of sources.</p>
                </div>
                <div className='pilot'>
                    <div className='pilot-left'>
                        <div className='trustpilot'>
                            <IoStar />
                            <span>Trustpilot</span>
                            <div className='five-stars'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </div>
                        </div>
                        <div className='first-review'>
                            <span className='t-number'>Trustpilot <b>5.0</b></span>
                            <span className='review'><b>2348</b> Reviews</span>
                        </div>
                    </div>
                    <div className='pilot-right'>
                        <div className='google'>
                            <img src={google} width={70} height={30} alt='google' />
                            <div className='four-half-stars'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />
                            </div>
                        </div>

                        <div className='second-review'>
                            <span className='tp-number'>Trustpilot <b>5.0</b>
                            </span>
                            <span className='next-review'><b>2348</b> Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-up" className='card-container'>
                <h2>Find Your Dream Car</h2>
                <div className='card-car'>
                    <div className='car'>
                        <img src={car} width={40} height={40} alt='car' />
                        <span>New Car</span>
                    </div>
                    <div className='car'>
                        <img src={car} width={40} height={40} alt='car' />
                        <span>Used Car</span>
                    </div>
                    <div className='car'>
                        <img src={car} width={40} height={40} alt='car' />
                        <span>Auction</span>
                    </div>
                </div>
                <form className='form'>
                    <div className='radio'>
                        <div className='first-radio'>
                            <input type='radio' name='budget' />
                            <label htmlFor='budget'>By Budget</label>
                        </div>
                        <div className='second-radio'>
                            <input type='radio' name='budget' />
                            <label htmlFor='budget'>By Brand</label>
                        </div>
                    </div>

                    <div className='vehicle-budget'>
                        <div className='budget'>
                            <label htmlFor="budget">Select a budget*</label>
                            <select id="budget" name="budget">
                                <option value="volvo">Ex: 10,000 - 100,000 GHS</option>
                                <option value="saab">10,000 - 100,000 GHS</option>
                                <option value="mercedes">10,000 - 100,000 GHS</option>
                                <option value="audi">10,000 - 100,000 GHS</option>
                            </select>
                        </div>
                        <div className='vehicle'>
                            <label htmlFor="cars">Select Vehicle*</label>
                            <select id="cars" name="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className='button'>
                        <div className='button-btn'>
                            <button type="button">Search Now!</button>
                        </div>
                        <span>Advanced Filter <BsFilterLeft /></span>
                    </div>
                </form>
            </div> */}

      <div className="p-2 container" style={{ border: "none", height: "auto" }}>
        <Row className="row g-3 p-4">
          <Col style={{ backgroundColor: "" }} xxl={7} className="mt-5 mb-5">
            <div className="speed">
              <span
                style={{
                  color: "#00d084",
                  fontFamily: "monospace",
                  fontSize: "1.5rem",
                }}
              >
                Fastest Speed
              </span>
              <SlSpeedometer
                size={25}
                style={{
                  color: "#00d084",
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                }}
              />
            </div>
            <div className="home-title">
              <h1 className="fw-bolder">
                For Best Way Buy <br />
                Dream Car.
              </h1>
              <p className="fw-lighter mt-4 fs-5">
                Car dealerships may sell new cars from one or several
                manufacturers, as well as used cars from a variety of sources.
              </p>
            </div>

            <div className="pilot">
              <div className="pilot-left">
                <div className="trustpilot">
                  <IoStar style={{ color: "#00d084" }} className="mt-1" />
                  <span className="mt-2 fw-bolder">Trustpilot</span>
                  <div className="five-stars">
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                  </div>
                </div>
                <div className="first-review">
                  <span className="t-number text-muted">
                    Trustpilot <b>5.0</b>
                  </span>
                  <span className="review">
                    <b className="text-muted">2348</b> Reviews
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={5}>
            <Card className="" style={{ boxShadow: "none", width: "auto", border: 'none' }}>
              <CardBody>
                <div data-aos="flip-up" className="">
                  <h2 className="fw-bolder">Find Your Dream Car</h2>
                  <div
                    className="d-flex mt-5"
                    style={{
                      justifyContent: "space-evenly",
                      flexWrap: "",
                      gap: "10px",
                    }}
                  >
                    <div
                      className="py-1 px-5"
                      style={{
                        borderBottom: "1px solid #00d084",
                        borderRadius: "100px",
                      }}
                    >
                      <div className="text-center">
                        <img
                          src={
                            "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                          }
                          alt="car"
                          width="34"
                          className="text-center"
                        />
                      </div>

                      <span
                        className="text-center fw-bolder"
                        style={{ width: "max-content" }}
                      >
                        New Car
                      </span>
                    </div>
                    <div
                      className="py-1 px-5"
                      style={{
                        borderBottom: "1px solid #00d084",
                        borderRadius: "100px",
                      }}
                    >
                      <div className="text-center">
                        <img
                          src={
                            "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                          }
                          alt="car"
                          width="34"
                          className="text-center"
                        />
                      </div>

                      <span
                        className="text-center fw-bolder"
                        style={{ width: "max-content" }}
                      >
                        New Car
                      </span>
                    </div>
                    <div
                      className="py-1 px-5"
                      style={{
                        borderBottom: "1px solid #00d084",
                        borderRadius: "100px",
                      }}
                    >
                      <div className="text-center">
                        <img
                          src={
                            "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                          }
                          alt="car"
                          width="34"
                          className="text-center"
                        />
                      </div>

                      <span
                        className="text-center fw-bolder"
                        style={{ width: "max-content" }}
                      >
                        New Car
                      </span>
                    </div>
                  </div>

                  <form className="form">
                    <div className="radio mt-5 mb-5">
                      <div className="first-radio">
                        <input type="radio" name="budget" />
                        <label htmlFor="budget">By Budget</label>
                      </div>
                      <div className="second-radio">
                        <input type="radio" name="budget" />
                        <label htmlFor="budget">By Brand</label>
                      </div>
                    </div>

                    <div className="text-center">
                      <div>
                        <label className="text-start fw-lighter">Select Budget*</label>
                        <select
                          id="budget"
                          name="budget"
                          style={{
                            backgroundColor: "#ebeff0",
                            border: "1px solid #e0e0e0",
                          }}
                          className="w-100"
                        >
                          <option value="volvo">
                            Ex: 10,000 - 100,000 GHS
                          </option>
                          <option value="saab">10,000 - 100,000 GHS</option>
                          <option value="mercedes">10,000 - 100,000 GHS</option>
                          <option value="audi">10,000 - 100,000 GHS</option>
                        </select>
                      </div>
                      <div className="mt-5">
                        <label className="text-start fw-lighter">Select Vehicles*</label>
                        <select
                          id="budget"
                          name="budget"
                          style={{
                            backgroundColor: "#ebeff0",
                            border: "1px solid #e0e0e0",
                          }}
                          className="w-100"
                        >
                          <option value="volvo">
                            Ex: 10,000 - 100,000 GHS
                          </option>
                          <option value="saab">10,000 - 100,000 GHS</option>
                          <option value="mercedes">10,000 - 100,000 GHS</option>
                          <option value="audi">10,000 - 100,000 GHS</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-dark w-100 p-3"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#00d084",
                            color: "black",
                          }}
                        >
                          SEARCH 12463 VEHICLES
                        </button>
                      </div>
                      <span className="mt-4">
                        Advanced Filter <BsFilterLeft />
                      </span>
                    </div>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
