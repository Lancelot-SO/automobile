import React, { useEffect } from 'react';
import "./TopRated.css";
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import tesla from "../assets/tesla.png";
import toyota from "../assets/toyota.png"
import range from "../assets/range.webp";
import cadillac from "../assets/cadillac.jpg";
import jeep from "../assets/jeep.jpg"
import { MdCollections } from "react-icons/md";
import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { PiArrowCircleLeftLight, PiArrowCircleRightLight } from "react-icons/pi";


const TopRated = () => {


    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
        AOS.refresh();

    }, []);

    const cars = [
        {
            id: 1,
            img: cadillac,
            name: "Cadillac Escalade-2023",
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
            brand: toyota,
            electricity: "electricity"
        },
        {
            id: 2,
            img: jeep,
            name: "Jeep Wrangler-2023",
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
            brand: tesla,
            electricity: "electricity"
        },
        {
            id: 3,
            img: range,
            name: "Range Rover Vela-2023",
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
            brand: tesla,
            electricity: "electricity"
        },
        {
            id: 4,
            img: range,
            name: "Range Rover Vela-2023",
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
            brand: tesla,
            electricity: "electricity"
        },

    ];


    return (
        <div data-aos="zoom-out-down" className='main-collections'>
            <div className='collections'>
                <h3>Used Cars</h3>
                <div className='rated-collections'>
                    <h1>Top Rated Used Cars</h1>
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
                <div>
                    <div className='recent-car'>
                        <div className='cars-card'>
                            {
                                cars.map((car) => {
                                    return (
                                        <div>
                                            <div className="rated-card" key={car.id}>
                                                <div className='img-card'>
                                                    <img src={car.img} alt='suv' />
                                                    <span className='ten-collections'>{car.collection} 10</span>
                                                    <span className='heart'>{car.heart}</span>
                                                    <span className='right-arrow'>{car.right}</span>

                                                    <div className='slide'>
                                                        <span className='left-arrow'>{car.left}</span>
                                                    </div>
                                                </div>
                                                <div className='main-details'>
                                                    <div className='details'>
                                                        <h4>{car.name}</h4>
                                                        <div className='price-location'>
                                                            <span className='price'>${car.price}</span>

                                                            <span className='location'>{car.map}<b>{car.location}</b> </span>
                                                        </div>
                                                        <div className='tank'>
                                                            <span>{car.speed} {car.miles}</span>
                                                            <span>{car.tunk}{car.fueltype}</span>
                                                            <span>{car.plug} {car.electricity}</span>
                                                        </div>
                                                        <div className='border'></div>
                                                        <div className='views'>
                                                            <div className='view-more'>
                                                                <div className='more'>
                                                                    <span className='icon'>{car.truck}</span>
                                                                    <span><b>{car.view}</b></span>
                                                                </div>
                                                                <img src={car.brand} alt="brand" className="brand-logo" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <h4>Available Thousands of cars in</h4>
                    <button>Accra</button>
                </div>
            </div>
        </div >
    )
}

export default TopRated;
