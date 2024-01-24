import React, { useEffect } from 'react';
import "./NewCars.css";
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import tesla from "../assets/tesla.png";
import toyota from "../assets/toyota.png"
import range from "../assets/range.webp";
import cadillac from "../assets/cadillac.jpg";
import jeep from "../assets/jeep.jpg"
import { MdCollections } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { PiArrowCircleLeftLight, PiArrowCircleRightLight } from "react-icons/pi";


const NewCars = () => {


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
            expect: "Expected Launch - 02 June, 2025",
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
            expect: "Expected Launch - 02 June, 2025",
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
            expect: "Expected Launch - 02 June, 2025",
            heart: <IoMdHeartEmpty />,
            collection: <MdCollections />,
            left: <PiArrowCircleLeftLight />,
            right: <PiArrowCircleRightLight />,
            truck: <FaTruckFast />,
            view: "View Details",
            brand: tesla,
        },
    ];


    return (
        <div data-aos="zoom-out-down" className='main-collections'>
            <div className='collections'>
                <h3>On The Way</h3>
                <div className='header-collections'>
                    <h1>Upcoming Cars</h1>
                </div>
                <div>
                    <div className='recent-car'>
                        <div className='cars-card'>
                            {
                                cars.map((car) => {
                                    return (
                                        <div>
                                            <div className="card" key={car.id}>
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
                                                            <span className='price'>${car.price}</span>                                                        </div>
                                                        <div className='tank'>
                                                            <span>{car.expect}</span>
                                                        </div>
                                                        <div className='border'></div>
                                                        <div className='views'>
                                                            <div className='view-more'>
                                                                <div className='more'>
                                                                    <button className='button-btn'>
                                                                        <VscAccount />
                                                                        Notify Me When Launched
                                                                    </button>
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
                    <div className='category'>
                        <h4>There will be 100+ Upcoming Cars</h4>
                        <button>View More</button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default NewCars;
