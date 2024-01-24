import React, { useEffect } from 'react'
import "./Ads.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiCash } from "react-icons/gi";
import { IoCarSportOutline, IoStar } from "react-icons/io5";
import { LiaSellcast } from "react-icons/lia";
import { FaRegThumbsUp } from "react-icons/fa";

const Ads = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
        AOS.refresh();

    }, [])
    return (
        <div data-aos="fade-up" className='main'>
            <div className='agency'>
                <div className='auto'>
                    <h3>Best Car Agency</h3>
                    <h1>Why Only Choose AutoMarket</h1>
                </div>
                <div className='main-cards'>
                    <div className='card'>
                        <div className='ads-text'>
                            <span className='cash'><GiCash /></span>
                            <span className='aff'>Affordable</span>
                            <span className='price'>Price</span>
                        </div>
                        <p>An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</p>
                    </div>
                    <div className='card'>
                        <div className='ads-text'>
                            <span className='cash'><GiCash /></span>
                            <span className='money'>Money Back</span>
                            <span className='guarantee'>Guarantee</span>
                        </div>
                        <p>Some may offer a full refund with no questions asked, others may require the customer to provide...</p>
                    </div>
                    <div className='card'>
                        <div className='ads-text'>
                            <span className='cash'><GiCash /></span>
                            <span className='month'>8 Month</span>
                            <span className='warranty'>Warranty</span>
                        </div>
                        <p>During this 8-month period, if the product fails to function properly due to a defect or malfunction...</p>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className='adverts'>
                    <div className='container'>
                        <IoCarSportOutline className='icon' />
                        <div>
                            <span><b>540K+</b></span>
                            <span>Car Avsilable</span>
                        </div>
                    </div>
                    <div className='container'>
                        <LiaSellcast className='icon' />
                        <div>
                            <span><b>364K+</b></span>
                            <span>Car Sold</span>
                        </div>
                    </div>
                    <div className='container'>
                        <IoCarSportOutline className='icon' />
                        <div>
                            <span><b>180K+</b></span>
                            <span>Used Car</span>
                        </div>
                    </div>
                    <div className='container'>
                        <FaRegThumbsUp className='icon' />
                        <div className='customer'>
                            <span><b>88.56%</b></span>
                            <span>Customer Satisfaction</span>
                        </div>
                    </div>
                </div>

                <div className='excel'>
                    <div className='next-excel'>
                        <div className='excellent'>
                            <span>Excellent</span>
                            <span className='stars'>
                                <IoStar className='star' />
                                <IoStar className='star' />
                                <IoStar className='star' />
                                <IoStar className='star' />
                                <IoStar className='star' />
                            </span>
                        </div>
                        <div className='rating'>
                            <span>5.0 Rating out of 5.0 based on <a href='/'>245354 reviews</a></span>
                        </div>
                        <div className='trust-pilot'>
                            <span><IoStar className='star-trust' /></span>
                            <span><b>Trustpilot</b></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Ads
