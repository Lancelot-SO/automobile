import Carousel from "react-multi-carousel";
// Import Swiper styles
// import "./style.css";
import lambo from "../../../../assets/lamborghini.webp";
import range from "../../../../assets/range.webp";
import cadillac from "../../../../assets/cadillac.jpg";
import jeep from "../../../../assets/jeep.jpg";
import { MdCollections } from "react-icons/md";
import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { Button } from "reactstrap";
import { FaTruckFast } from "react-icons/fa6";
import { Card } from "reactstrap";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";

import { CiHeart } from "react-icons/ci";
import "react-multi-carousel/lib/styles.css";
// import ImageSlider from "./ImageSlider";
import { useState } from "react";

const RelatedParts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cars = [
    {
      id: 1,
      img: cadillac,
      name: "Cadillac Escalade",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 2,
      img: jeep,
      name: "Jeep Wrangler",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },

    {
      id: 4,
      img: lambo,
      name: "Lamborghini Aventador",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 5,
      img: lambo,
      name: "Lamborghini Aventador",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 6,
      img: lambo,
      name: "Lamborghini Aventador",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
  ];

  return (
    <>
      <div className="text-start mt-5">
        {/* <h6 className="text-start mt-5" style={{ color: "#00d084" }}>
         Related Car Parts
        </h6> */}
        <h4 className="text-start fw-bolder"> Related Car Parts</h4>
      </div>
      <Carousel responsive={responsive} className="mb-5">
        <div>
          <div className="car-card">
            {cars.map((car) => {
              return (
                <div className=" mt-5">
                  <Card
                    className="p-3"
                    key={car.id}
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      height: "auto",
                    }}
                  >
                    <div>
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
                        <div className="text-center">
                          {" "}
                          {/* Centering wrapper */}
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
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* DO not remove */}
        {/* IT shawdows the number of cars available for the arrows */}
        {cars.map((a) => {
          return <div></div>;
        })}
      </Carousel>

      <div className="fw-lighter text-center mb-5">
        There are more Car Parts Available{" "}
        <Button
          style={{
            backgroundColor: "#00d084",
            border: "none",
            width: "max-content",
          }}
          className="p-3 text-dark fw-bolder mx-2"
        >
          View More
        </Button>
      </div>
    </>
  );
};

export default RelatedParts;
