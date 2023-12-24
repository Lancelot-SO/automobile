import React, { useEffect } from 'react';
import "./Collection.css";
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import lambo from "../assets/lamborghini.webp";
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


const Collection = () => {


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
            name: "Mercedes-Benx C-Class-2023",
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
            electricity: "electricity"
        },
        {
            id: 2,
            img: jeep,
            name: "Mercedes-Benx C-Class-2023",
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
            electricity: "electricity"
        },
        {
            id: 3,
            img: range,
            name: "Mercedes-Benx C-Class-2023",
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
            electricity: "electricity"
        },
        {
            id: 4,
            img: lambo,
            name: "Mercedes-Benx C-Class-2023",
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
            electricity: "electricity"
        },
        {
            id: 5,
            img: lambo,
            name: "Mercedes-Benx C-Class-2023",
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
            electricity: "electricity"
        },
        {
            id: 6,
            img: lambo,
            name: "Mercedes-Benx C-Class-2023",
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
            electricity: "electricity"
        },
    ];


    return (
        <div data-aos="zoom-out-down" className='main-collections'>
            <div className='collections'>
                <h3>Available Brand Car</h3>
                <div className='header-collections'>
                    <h1>Most Searched Used Car</h1>
                    <div className='links'>
                        <div className='link-container'>
                            <a href='/'>Sedan</a>
                            <a href='/'>SUV</a>
                            <a href='/'>Toyota</a>
                            <a href='/'>Hatch</a>
                            <a href='/'>BMW</a>
                        </div>
                    </div>
                </div>
                <div className='main-cards'>
                    <div className='card-arrows'>
                        <span className='card-left-arrow'><PiArrowCircleLeftLight /></span>
                        <span className='card-right-arrow'><PiArrowCircleRightLight /></span>
                    </div>

                    <div className='car-card'>
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
                                                            <span className='icon'>{car.truck}</span>
                                                            <span><b>{car.view}</b></span>
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
                    <h4>Availabe 50+ Cars</h4>
                    <button>View All Sedan</button>
                </div>
            </div>
        </div >
    )
}

export default Collection
