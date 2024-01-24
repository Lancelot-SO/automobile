import React, { useEffect } from 'react';
import "./CompareCar.css";
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import tesla from "../assets/tesla.png";
// import toyota from "../assets/toyota.png"
// import range from "../assets/range.webp";
// import cadillac from "../assets/cadillac.jpg";
// import jeep from "../assets/jeep.jpg"
// import { MdCollections } from "react-icons/md";
// import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
// import { SlLocationPin } from "react-icons/sl";
// import { BsFuelPumpDiesel } from "react-icons/bs";
// import { MdElectricalServices } from "react-icons/md";
// import { FaTruckFast } from "react-icons/fa6";
// import { PiArrowCircleLeftLight, PiArrowCircleRightLight } from "react-icons/pi";


const CompareCar = () => {


    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
        AOS.refresh();

    }, []);


    return (
        <div data-aos="zoom-out-down" className='main-collections'>
            <div className='collections'>
                <h3>Best Car Collection</h3>
                <div className='rated-collections'>
                    <h1>Compare Car With Brand</h1>
                    <div className='filter'>
                        <div className='filter-container'>
                            <label htmlFor="carFilter">Filter by:</label>
                            <select id="carFilter">
                                <option value="/">Accra</option>
                                <option value="/">Takoradi</option>
                                <option value="/">Kumasi</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <h4>There are Trending cars Available</h4>
                    <button>View More</button>
                </div>
            </div>
        </div >
    )
}

export default CompareCar;
