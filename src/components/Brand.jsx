import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Brand.css";
import suzuki from "../assets/suzuki.png";
import tesla from "../assets/tesla.png";
import toyota from "../assets/toyota.png";
import bmw from "../assets/bmw.png";
import honda from "../assets/honda.png";
import mazda from "../assets/mazda.png";
import car from "../assets/car.png";

const Brand = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  const brands = [
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/suzuki.svg",
      alt: "Suzuki",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/bmw.svg",
      alt: "BMW",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/toyota.svg",
      alt: "Toyota",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/tesla.svg",
      alt: "Tesla",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/honda.svg",
      alt: "Honda",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/mazda.svg",
      alt: "Mazda",
    },
  ];
  return (
    <div data-aos="flip-right" className="brands">
      <div className="container ">
        <TransitionGroup className="brand-board">
          {brands.map((brand, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade-slide-in">
              <div className="brand-card ">
                <div className="brand-container">
                  <img src={brand.image} alt={brand.alt} />
                  <img
                    src={
                      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/bmw-car.svg"
                    }
                    alt="suzuki"
                  />
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <TransitionGroup className="brand-board">
          {brands.map((brand, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade-slide-in">
              <div className="brand-card">
                <div className="brand-container">
                  <img src={brand.image} alt={brand.alt} />
                  <img
                    src={
                      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/bmw-car.svg"
                    }
                    alt="suzuki"
                  />
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div className="brand-cat">
          <h4>There are 30+ Brands Categories Available</h4>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
