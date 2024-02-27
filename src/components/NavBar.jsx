import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/car-logo.png";
// import Modal from "./Modal";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdPricetags, IoMdHeartEmpty, IoIosArrowDown } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { Button } from "reactstrap";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Input,
  Col,
  Label,
  FormGroup,
  Spinner,
  FormFeedback,
} from "reactstrap";
import { Container } from "reactstrap";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import {toast} from 'react-hot-toast'

const LogoAndText = () => (
  <div className="navbar-logo">
    <img
      src={
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/footer-logo.svg"
      }
      alt="logo"
    />
    {/* <div className="navbar-auto">
      <div className="navbar-text">
        <h1 className="navbar-title">AutoMobile</h1>
        <p className="navbar-desc">Automotive car dealer</p>
      </div>
    </div> */}
  </div>
);

const VerticalDivider = () => {
  return (
    <div
      style={{ margin: "0 10px", borderLeft: "1px solid #ccc", height: "20px" }}
    />
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    toggleModal();
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const [isOpen, setIsOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [setllWithUsModal, setSellWithUsModal] = useState(false);
  const toggleSellWithUsModal = () => setSellWithUsModal(!setllWithUsModal);

  const [loading, setLoading] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirm: Yup.string().required("Please confirm password is required"),
    }),

    onSubmit: (values) => {
      console.log("balues");
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
        validation.resetForm();
        toast.success('Sign Up Successfully')
        toggle()
      }, 4000);
   
    },


  });

  return (
    <>
      <header>
        <nav className="px-md-5 " style={{ borderBottom: "1px solid #e0e0e0" }}>
          <div className="navbar-row px-md-5">
            <div className="text-start">
              <img
                src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/logo.svg"
                alt="4"
              ></img>
            </div>

            <div className="bars">
              <div onClick={() => setNav(!nav)} className="design-bars">
                {nav ? (
                  <FaTimes size={30} className="fatimes" />
                ) : (
                  <FaBars size={30} className="fabars" />
                )}
              </div>

              {nav && (
                <section className="">
                  <div className="">
                    <div className="text-start">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/logo.svg"
                        alt="4"
                      ></img>
                    </div>

                    <div className="">
                      <ul className="">
                        <li>
                          HOME <IoIosArrowDown />
                        </li>
                        <li>
                          NEW CAR <IoIosArrowDown />
                        </li>
                        <li>
                          USED CAR <IoIosArrowDown />
                        </li>
                        <li>
                          PAGES <IoIosArrowDown />
                        </li>
                        <li>CONTACT US</li>
                      </ul>
                    </div>

                    <div className="">
                      <div className="">
                        <div className="" onClick={toggle}>
                          <p>
                            {" "}
                            <IoMdPricetags />
                            SELL WITH US
                          </p>
                          <Button>s</Button>s
                        </div>
                        <div className="">
                          <p>
                            {" "}
                            <IoMdHeartEmpty />
                            SAVE
                          </p>
                        </div>
                      </div>

                      <div className="">
                        <div className="" onClick={handleSignUpClick}>
                          <button
                            className="btn btn-dark w-100"
                            style={{ borderRadius: "5px" }}
                            onClick={toggle}
                          >
                            <RiAccountCircleLine width={20} height={20} />
                            Sign Up
                          </button>

                          {showModal && (
                            <Modal onClose={toggleModal}>
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  validation.handleSubmit();
                                  return false;
                                }}
                              >
                                <label>
                                  Username:
                                  <Input
                                    type="text"
                                    name="role_name"
                                    id="role_name"
                                    className="form-control p-3"
                                    placeholder="eg. System Administrator"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.first_name || ""}
                                    invalid={
                                      validation.touched.first_name &&
                                      validation.errors.first_name
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.first_name &&
                                  validation.errors.first_name ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.first_name}
                                    </FormFeedback>
                                  ) : null}
                                </label>
                                <label>
                                  Email:
                                  <input
                                    type="email"
                                    name="email"
                                    onClick={handleInputClick}
                                  />
                                </label>
                                <label>
                                  Password:
                                  <input
                                    type="password"
                                    name="password"
                                    onClick={handleInputClick}
                                  />
                                </label>
                                <button type="submit">Sign Up</button>
                              </form>
                            </Modal>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="side-contact">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/logo.svg"
                        alt="4"
                      ></img>
                    </div>
                  </div>
                </section>
              )}
            </div>

            <div className="search mt-2 mb-3 text-start w-50">
              <input name="search" placeholder="Search car names or brand" />
              <button className="btn">
                <BsSearch />
              </button>
            </div>

            <div
              className="d-flex gap-3"
              style={{ justifyContent: "space-evenly" }}
            >
              <div className="mt-1 mx-3" onClick={toggleSellWithUsModal}>
                <IoMdPricetags style={{ color: "#00d084" }} />
                SELL WITH US
              </div>
              <div className="mt-1 mx-3">
                <IoMdHeartEmpty style={{ color: "#00d084" }} />
                SAVE
              </div>
              <div>
                <Button
                  className="btn btn-dark w-100"
                  style={{
                    borderRadius: "4px",
                    backgroundColor: "#00d084",
                    border: "none",
                  }}
                  onClick={toggle}
                >
                  <RiAccountCircleLine style={{ color: "white" }} />
                  SIGN UP
                </Button>
              </div>
            </div>

            <div className="new-cart">
              <div className="cart-top">
                <BsHandbag className="top-hand-bag" />
                <div className="cart-numb">
                  <span>Cart</span>
                  <span>(3)</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="px-5">
          <section className="bottom-nav px-5">
            <div className="bottom-nav-next">
              <div className="menu-list">
                <ul className="menu">
                  <li>
                    HOME <IoIosArrowDown />
                  </li>
                  <li>
                    NEW CAR <IoIosArrowDown />
                  </li>
                  <li>
                    USED CAR <IoIosArrowDown />
                  </li>
                  <li>
                    PAGES <IoIosArrowDown />
                  </li>
                  <li>CONTACT US</li>
                </ul>
              </div>
              <div className="right-side">
                <div className="cart">
                  <BsHandbag className="hand-bag" />
                  <div className="cart-numb">
                    <span>Cart</span>
                    <span>(3)</span>
                  </div>
                </div>
                <div className="contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="gray"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2" />
                  </svg>

                  <VerticalDivider />

                  <div className="">
                    <span className="">To More Inquiry</span>
                    <span className="number">+556 318 804</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <div>
        {/* <Button color="primary" onClick={toggle}>
          Open Modal
        </Button> */}
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle} style={{ border: "none" }}></ModalHeader>
          <ModalBody>
            <div>
              <div className="text-center mt-5">
                <h5 className="fw-bolder">Sign Up</h5>
                <p className="text-muted">
                  Already have an account? <b>Log In</b>
                </p>
              </div>
              <div>
                <hr style={{ border: "1px solid #e0e0e0" }} />
              </div>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>First Name*</lable>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control p-3"
                        placeholder="First Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.first_name || ""}
                        invalid={
                          validation.touched.first_name &&
                          validation.errors.first_name
                            ? true
                            : false
                        }
                      />
                      {validation.touched.first_name &&
                      validation.errors.first_name ? (
                        <FormFeedback type="invalid">
                          {validation.errors.first_name}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Last Name*</lable>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control p-3"
                        placeholder="Last Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.last_name || ""}
                        invalid={
                          validation.touched.last_name &&
                          validation.errors.last_name
                            ? true
                            : false
                        }
                      />
                      {validation.touched.last_name &&
                      validation.errors.last_name ? (
                        <FormFeedback type="invalid">
                          {validation.errors.last_name}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="m-3 mt-5">
                    <Col md={12} sm={6} xs={12}>
                      <lable>Enter your email address*</lable>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control p-3"
                        placeholder="john@example.com"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">
                          {validation.errors.email}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Password*</lable>
                      <Input
                        type="text"
                        name="password"
                        id="password"
                        className="form-control p-3"
                        placeholder="*** ***"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password || ""}
                        invalid={
                          validation.touched.password &&
                          validation.errors.password
                            ? true
                            : false
                        }
                      />
                      {validation.touched.password &&
                      validation.errors.password ? (
                        <FormFeedback type="invalid">
                          {validation.errors.password}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Confirm Password*</lable>
                      <Input
                        type="text"
                        name="confirm"
                        id="confirm"
                        className="form-control p-3"
                        placeholder="*** ***"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.confirm || ""}
                        invalid={
                          validation.touched.confirm &&
                          validation.errors.confirm
                            ? true
                            : false
                        }
                      />
                      {validation.touched.confirm &&
                      validation.errors.confirm ? (
                        <FormFeedback type="invalid">
                          {validation.errors.confirm}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <div className="m-4">
                    <Button
                      className="w-100 p-3 mt-3"
                      style={{
                        backgroundColor: "#00d084",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading && <Spinner size={"sm"} className="mx-2" />}
                      Sign Up Now
                    </Button>
                  </div>
                </form>
              </div>

              <div className="text-center mt-5">
                <p className=" text-muted fs-5">
                  By signing up you agree to the <b>'terms & conditions'</b>
                </p>
              </div>

              <div className="text-center mt-4 mb-4 d-flex justify-content-center gap-4">
                <div
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    width: "auto",
                    height: "auto",
                  }}
                  className="p-4 btn btn-light"
                >
                  <FcGoogle />
                </div>
                <div
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    width: "auto",
                    height: "auto",
                  }}
                  className="p-4 btn btn-light"
                >
                  <FaFacebookF style={{ color: "#6990ff" }} />
                </div>
                <div
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    width: "auto",
                    height: "auto",
                  }}
                  className="p-4 btn btn-light"
                >
                  <IoLogoTwitter style={{ color: "blue" }} />
                </div>
              </div>
            </div>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter> */}
        </Modal>

        <Modal
          isOpen={setllWithUsModal}
          toggle={toggleSellWithUsModal}
          size="lg"
        >
          <ModalHeader
            toggle={toggleSellWithUsModal}
            style={{ border: "none" }}
          ></ModalHeader>
          <ModalBody>
            <div>
              <div className="text-start mt- m-3">
                <h5 className="fw-bolder">Sell Your Car</h5>
                <p className="text-muted">Your Personal Info</p>
              </div>
              <div>
                <hr style={{ border: "1px solid #e0e0e0" }} />
              </div>
              <div>
                <form>
                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>First Name*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="First Name"
                      />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Phone*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="+880- 123 234 ***"
                      />
                    </Col>
                  </Row>
                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Email (Optional)</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Enter your email address"
                      />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Location*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Enter your address"
                      />
                    </Col>
                  </Row>

                  <div className="text-start mt-5">
                    <h5 className="fw-bolder">Your Car Info</h5>
                  </div>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Car BRand Name*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Totyota"
                      />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Model*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="*** ***"
                      />
                    </Col>
                  </Row>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Reg. Year*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Rs etN 80"
                      />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Mileage*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="23,456 miles"
                      />
                    </Col>
                  </Row>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Fuel Type*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Petrol"
                      />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Selling Price*</lable>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Ex-GHc23,342,000"
                      />
                    </Col>
                  </Row>
                  <Row className="m-3 mt-5">
                    <Col md={12} sm={12} xs={12}>
                      <lable>Your Car Note*</lable>
                      <textarea
                        className="form-control p-3"
                        id="exampleFormControlTextarea1"
                        placeholder="Write something ..."
                        rows="3"
                      ></textarea>
                    </Col>
                  </Row>

                  <div className="m-4">
                    <Button
                      className="w-100 p-3 mt-3"
                      style={{
                        backgroundColor: "#00d084",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Submit Now
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
