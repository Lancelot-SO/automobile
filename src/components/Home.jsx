import React, { useEffect } from 'react';
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import google from "../assets/google.png";
import car from "../assets/car.png";


import { SlSpeedometer } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";
import { IoStar, IoStarHalf } from "react-icons/io5";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
        AOS.refresh();

    }, [])
    return (
        <div data-aos="zoom-in-down" className='home'>
            <div className='home-left'>
                <div className='speed'>
                    <span>Fastest Speed</span>
                    <SlSpeedometer size={30} />
                </div>
                <div className='home-title'>
                    <h1>For Best Way Buy <br />Dream Car.</h1>
                    <p>Car dealerships may sell new cars from one or several manufacturers, as well as used cars from a variety of sources.</p>
                </div>
                <div className='pilot'>
                    <div className='pilot-left'>
                        <div className='trustpilot'>
                            <IoStar />
                            <span>Trustpilot</span>
                            <div className='five-stars'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </div>
                        </div>
                        <div className='first-review'>
                            <span className='t-number'>Trustpilot <b>5.0</b></span>
                            <span className='review'><b>2348</b> Reviews</span>
                        </div>
                    </div>
                    <div className='pilot-right'>
                        <div className='google'>
                            <img src={google} width={70} height={30} alt='google' />
                            <div className='four-half-stars'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />
                            </div>
                        </div>

                        <div className='second-review'>
                            <span className='tp-number'>Trustpilot <b>5.0</b>
                            </span>
                            <span className='next-review'><b>2348</b> Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-up" className='card-container'>
                <h2>Find Your Dream Car</h2>
                <div className='card-car'>
                    <div className='car'>
                        <img src={car} width={40} height={40} alt='car' />
                        <span>New Car</span>
                    </div>
                    <div className='car'>
                        <img src={car} width={40} height={40} alt='car' />
                        <span>Used Car</span>
                    </div>
                    <div className='car'>
                        <img src={car} width={40} height={40} alt='car' />
                        <span>Auction</span>
                    </div>
                </div>
                <form className='form'>
                    <div className='radio'>
                        <div className='first-radio'>
                            <input type='radio' name='budget' />
                            <label htmlFor='budget'>By Budget</label>
                        </div>
                        <div className='second-radio'>
                            <input type='radio' name='budget' />
                            <label htmlFor='budget'>By Brand</label>
                        </div>
                    </div>

                    <div className='vehicle-budget'>
                        <div className='budget'>
                            <label htmlFor="budget">Select a budget*</label>
                            <select id="budget" name="budget">
                                <option value="volvo">Ex: 10,000 - 100,000 GHS</option>
                                <option value="saab">10,000 - 100,000 GHS</option>
                                <option value="mercedes">10,000 - 100,000 GHS</option>
                                <option value="audi">10,000 - 100,000 GHS</option>
                            </select>
                        </div>
                        <div className='vehicle'>
                            <label htmlFor="cars">Select Vehicle*</label>
                            <select id="cars" name="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className='button'>
                        <div className='button-btn'>
                            <button type="button">Search Now!</button>
                        </div>
                        <span>Advanced Filter <BsFilterLeft /></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
