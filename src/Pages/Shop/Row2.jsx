import { Col, Container, Row, Card } from "reactstrap";
import StarRatings from "react-star-ratings";
// import FilterSelect from "../components/FilterSelect";
// import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import data from "../../utils/Products";
// import ShopList from "../components/ShopList";
// import Banner from "../components/Banner/Banner";
// import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import CheckFilter from "../../components/Filters/CheckFilter";
import RangeFilter from "../../components/Filters/RangeFilter";
import { Button } from "reactstrap";
import { FaCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Row2 = () => {
  const products = data();

  console.log(products);

  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category !== "")
  );
  //   useWindowScrollToTop();

  const options = [
    { value: "Food", label: "Food" },
    { value: "Accessories", label: "Accessories" },
    { value: "Wearables", label: "Wearables" },
    { value: "Gadgets", label: "Gadgets" },
    { value: "Beverages", label: "Beverages" },
    { value: "Frozen Foods", label: "Frozen Foods" },
    { value: "Grocery & Staples", label: "Grocery & Staples" },
    { value: "Meats & Seafood", label: "Meats & Seafood" },
    { value: "Household Needs", label: "Household Needs" },
    { value: "Breakfast & Dairy", label: "Breakfast & Dairy" },
  ];

  const brandOptions = [
    { value: "In Stock", label: "In Stock" },
    { value: "On Sale", label: "On Sale" },
  ];

  const statusOptions = [
    { value: "Nike", label: "Nike" },
    { value: "Jordans", label: "Jordans" },
    { value: "Adidas", label: "Adidas" },
    { value: "Peak", label: "Peak" },
  ];

  const leftStyle = {
    width: "100%",
    border: "",
    height: "200px", // Set the desired height
    backgroundImage:
      'url("https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg")',
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "7px",
  };

  const longStyle = {
    width: "100%",
    border: "",
    height: "62svh", // Set the desired height
    backgroundImage:
      'url("https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif")',
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "7px",
  };

  return (
    <Fragment>
      <section className="filter-bar w-100">
        <Container className="filter-bar-container p-1 fluid">
          <Row className="">
            <Col
              xl={4}
              style={{ border: "1px solid #e5e6ec", borderRadius: "10px" }}
              className="px-4 mb-5"
            >
              {/* <Col md={8}>
                <SearchBar setFilterList={setFilterList} />
              </Col> */}
              <Col
                md={8}
                className="mt-5 home p-4 w-100"
                style={{ borderRadius: "10px" }}
              >
                <h4 className="fw-bolder">Product Category</h4>
                {/* <CheckFilter setFilterList={setFilterList} options={options} /> */}
                <div className="mt-4">
                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="fw-bolder ">
                      <FaCircle style={{ color: "#00d084" }} className="mx-2" />
                      Car Servicing
                    </div>
                    <div className="fw-lighter">(30)</div>
                  </div>
                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="fw-bolder ">
                      <FaCircle style={{ color: "#00d084" }} className="mx-2" />
                      Car Buying Advice
                    </div>
                    <div className="fw-lighter">(30)</div>
                  </div>
                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="fw-bolder ">
                      <FaCircle style={{ color: "#00d084" }} className="mx-2" />
                      Car Rental
                    </div>
                    <div className="fw-lighter">(30)</div>
                  </div>
                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="fw-bolder ">
                      <FaCircle style={{ color: "#00d084" }} className="mx-2" />
                      Driving
                    </div>
                    <div className="fw-lighter">(30)</div>
                  </div>
                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="fw-bolder ">
                      <FaCircle style={{ color: "#00d084" }} className="mx-2" />
                      Brand Car
                    </div>
                    <div className="fw-lighter">(30)</div>
                  </div>
                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="fw-bolder ">
                      <FaCircle style={{ color: "#00d084" }} className="mx-2" />
                      Tata
                    </div>
                    <div className="fw-lighter">(30)</div>
                  </div>
                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="fw-bolder ">
                      <FaCircle style={{ color: "#00d084" }} className="mx-2" />
                      Hyndai
                    </div>
                    <div className="fw-lighter">(30)</div>
                  </div>
                </div>
              </Col>
              <Col>
                <RangeFilter setFilterList={setFilterList} />
              </Col>
              <Col
                md={8}
                className="mt-5 home w-100 p-4"
                style={{ borderRadius: "10px" }}
              >
                <h4 className="fw-bolder">Product Ratings</h4>
                {/* <CheckFilter
                  setFilterList={setFilterList}
                  options={statusOptions}
                /> */}
                <div className="d-grid gap-2">
                  <div className="d-flex">
                    <div>
                      <StarRatings
                        rating={2}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                      />
                    </div>
                    <div className="mt-1 mx-2 fw-bolder">(2.0)</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <StarRatings
                        rating={3.5}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                      />
                    </div>
                    <div className="mt-1 mx-2 fw-bolder">(3.5)</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <StarRatings
                        rating={3.5}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                      />
                    </div>
                    <div className="mt-1 mx-2 fw-bolder">(3.5)</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <StarRatings
                        rating={2}
                        starRatedColor="gold"
                        numberOfStars={2}
                        name="rating"
                        starDimension="20px"
                      />
                    </div>
                    <div className="mt-1 mx-2 fw-bolder">(2.0)</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <StarRatings
                        rating={1}
                        starRatedColor="gold"
                        numberOfStars={1}
                        name="rating"
                        starDimension="20px"
                      />
                    </div>
                    <div className="mt-1 mx-2 fw-bolder">(1.0)</div>
                  </div>
                </div>
              </Col>
              <Col
                md={8}
                className="mt-5 mb-5"
                style={{ borderRadius: "10px" }}
              >
                <h4 className="fw-bolder">Recent Products</h4>
                {/* <CheckFilter
                  setFilterList={setFilterList}
                  options={brandOptions}
                /> */}
                <div>
                  <div className="d-flex mt-3">
                    <div className="fw-bolder">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/recent-prodect-img-01.png"
                        alt="img"
                      ></img>
                    </div>
                    <div className="fw-lighter mt-3">
                      <div className="fw-bolder">GHC 214.00</div>
                      <div>Steering Rack Advance Auto Parts.</div>
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <div className="fw-bolder">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/recent-prodect-img-02.png"
                        alt="img"
                      ></img>
                    </div>
                    <div className="fw-lighter mt-3">
                      <div className="fw-bolder">GHC 214.00</div>
                      <div>New Oil Filter Fit For Ys400.</div>
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <div className="fw-bolder">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/recent-prodect-img-03.png"
                        alt="img"
                      ></img>
                    </div>
                    <div className="fw-lighter mt-3">
                      <div className="fw-bolder">GHC 214.00</div>
                      <div>Tech master Carbon ceramic brakes.</div>
                    </div>
                  </div>
                </div>
              </Col>
              {/* <Col md={8} className="mt-2">
                <div style={longStyle}>
                
                </div>
              </Col> */}
            </Col>
            <Col xl={8} className="d-flex" style={{flexWrap: 'wrap'}}>
              <Row >
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-07.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className=" fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-05.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
              </Row>
              <Row >
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-02.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-03.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className=" fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-08.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
              </Row>
              <Row className="mb-5" >
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-09.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-07.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className=" fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-2"
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="">
                      <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-between mb-3"
                      >
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "4px",
                          }}
                          className="p-1 text-light fw-bolder px-3"
                        >
                          -10%
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="p-1 text-light fw-bolder"
                        >
                          <CiHeart
                            style={{ color: "black" }}
                            className="fs-5"
                          />
                        </div>
                      </div>
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-06.png"
                        }
                        alt="suv"
                        className=""
                        style={{
                          borderRadius: "6px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-50 p-2 text-dark fw-bolder"
                      >
                        Add to cart
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="fs-5">
                        Tech master New Brand Carbon ceramic brakes.
                      </h4>
                      <div className="fw-lighter">GHC 214.00</div>
                    </div>

                    {/* <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div> */}
                  </div>
                </div>
              </Row>
         
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Row2;
