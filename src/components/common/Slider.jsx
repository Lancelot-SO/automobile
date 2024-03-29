import Carousel from "react-multi-carousel";
// Import Swiper styles
import "./style.css";
import lambo from "../../assets/lamborghini.webp";
import range from "../../assets/range.webp";
import cadillac from "../../assets/cadillac.jpg";
import jeep from "../../assets/jeep.jpg";
import { MdCollections } from "react-icons/md";
import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { Card } from "reactstrap";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";


import "react-multi-carousel/lib/styles.css";
import ImageSlider from "./ImageSlider";
import { useState } from "react";

const Sli = () => {
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
      <Carousel responsive={responsive}>
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
                      height: "535px",
                    }}
                  >
                    <div className="">
                      <img
                        src={car.img}
                        alt="suv"
                        className="img-fluid mb-4"
                        style={{ borderRadius: "6px" }}
                      />

                      {/* <ImageSlider img={""}/> */}

                      <span className="ten-collections">
                        {car.collection} 10
                      </span>
                      <span className="heart">{car.heart}</span>
                      <span className="right-arrow">{car.right}</span>

                      <div className="slide">
                        <span className="left-arrow">{car.left}</span>
                      </div>
                    </div>

                    <div className="text-center  mb-3">
                      <div className="w-100 d-flex gap-1 mt-2 text-center justify-content-center align-items-center">
                        {" "}
                        <div
                          className="fw-lighter fs-5 p-2"
                          style={{
                            backgroundColor: "#e5e6ec",
                            borderRadius: "10px",
                          }}
                        >
                          00D
                        </div>
                        <div className="fs-5 p-2 fw-lighter">:</div>
                        <div
                          className="fw-lighter fs-5 p-2"
                          style={{
                            backgroundColor: "#e5e6ec",
                            borderRadius: "10px",
                          }}
                        >
                          00H
                        </div>
                        <div className="fs-5 p-2 fw-lighter">:</div>
                        <div
                          className="fw-lighter fs-5 p-2"
                          style={{
                            backgroundColor: "#e5e6ec",
                            borderRadius: "10px",
                          }}
                        >
                          00M
                        </div>
                        <div className="fs-5 p-2 fw-lighter">:</div>
                        <div
                          className="fw-lighter fs-5 p-2"
                          style={{
                            backgroundColor: "#e5e6ec",
                            borderRadius: "10px",
                          }}
                        >
                          00S
                        </div>
                      </div>
                    </div>
                    <div className="main-details">
                      <div className="details">
                        <h4 className="fw-bolder">{car.name}</h4>
                        <div className="price-location">
                          <span className="price">${car.price}</span>
                          <span className="location">
                            {car.map}
                            <b>{car.location}</b>{" "}
                          </span>
                        </div>
                        <div className="tank">
                          <span>
                            {car.speed} {car.miles}
                          </span>
                          <span>
                            {car.tunk}
                            {car.fueltype}
                          </span>
                          <span>
                            {car.plug} {car.electricity}
                          </span>
                        </div>
                        <hr style={{ border: "1px solid #dbdbdb" }} />

                        <div className="d-flex" style={{ cursor: "pointer" }}>
                          <span className="icon">{car.truck}</span>{" "}
                          <span className="fw-bolder">View Details</span>
                        </div>
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


      
    </>
  );
};

export default Sli;
