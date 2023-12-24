import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../assets/car-logo.png"
// import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from "react-icons/fa"
import { BsSearch, BsHandbag } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdPricetags, IoMdHeartEmpty, IoIosArrowDown } from "react-icons/io";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className='navbar-row'>
                    <div className='navbar-logo'>
                        <img src={logo} alt='logo' />
                        <div className='navbar-auto'>
                            <div className='navbar-text'>
                                <h1 className='navbar-title'>AutoMobile</h1>
                                <p className='navbar-desc'>Automotive car dealer</p>
                            </div>
                        </div>
                    </div>
                    <div className='search'>
                        <input name='search' placeholder='Search car names or brand' />
                        <button className='btn'><BsSearch /></button>
                    </div>
                    <div className='new-cart'>
                        <div className='cart-top'>
                            <BsHandbag className='top-hand-bag' />
                            <div className='cart-numb'>
                                <span>Cart</span>
                                <span>(3)</span>
                            </div>
                        </div>
                    </div>
                    <div className='bars'>
                        <div onClick={() => setNav(!nav)} className='design-bars'>
                            {
                                nav ? <FaTimes size={30} className='fatimes' /> : <FaBars size={30} className='fabars' />
                            }
                        </div>
                        {
                            nav && (
                                <section className='side-nav'>
                                    <div className='side-nav-next'>
                                        <div className='navbar-logo'>
                                            <img src={logo} alt='logo' />
                                            <div className='navbar-auto'>
                                                <div className='navbar-text'>
                                                    <h1 className='navbar-title'>AutoMobile</h1>
                                                    <p className='navbar-desc'>Automotive car dealer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='side-menu-list'>
                                            <ul className="side-menu">
                                                <div className="side-menu-item">
                                                    <li>HOME</li>
                                                    <span><IoIosArrowDown /></span>
                                                </div>
                                                <div className="side-menu-item">
                                                    <li>NEW CAR</li>
                                                    <span><IoIosArrowDown /></span>
                                                </div>
                                                <div className="side-menu-item">
                                                    <li>USED CAR</li>
                                                    <span><IoIosArrowDown /></span>
                                                </div>
                                                <div className="side-menu-item">
                                                    <li>PAGES</li>
                                                    <span><IoIosArrowDown /></span>
                                                </div>
                                                <div className="side-menu-item">
                                                    <li>CONTACT US</li>
                                                </div>
                                            </ul>
                                        </div>
                                        <div className='side-tags'>
                                            <div className='side-sell-save'>
                                                <div className='side-tag-sell'>
                                                    <span><IoMdPricetags /></span>
                                                    <p>SELL WITH US</p>
                                                </div>
                                                <div className='side-tag-save'>
                                                    <span><IoMdHeartEmpty /></span>
                                                    <p>SAVE</p>
                                                </div>
                                            </div>
                                            <div className='side'>
                                                <div className='side-signup'>
                                                    <span><RiAccountCircleLine width={40} height={40} /></span>
                                                    <a href="/">Sign Up</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="side-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                className="bi bi-envelope-open"
                                                viewBox="0 0 16 16">
                                                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2" />
                                            </svg>
                                            <div className='side-inquiry'>
                                                <span className='side-more'>To More Inquiry</span>
                                                <span className='side-number'>+556 318 804</span>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            )
                        }
                    </div>
                    <div className='tags'>
                        <div className='sell-save'>
                            <div className='tag-sell'>
                                <span><IoMdPricetags /></span>
                                <p>SELL WITH US</p>
                            </div>
                            <div className='tag-save'>
                                <span><IoMdHeartEmpty /></span>
                                <p>SAVE</p>
                            </div>
                        </div>
                        <div className='signup'>
                            <span><RiAccountCircleLine width={20} height={20} /></span>
                            <a href="/">Sign Up</a>
                        </div>

                    </div>
                </div>
            </nav>
            <section className='bottom-nav'>
                <div className='bottom-nav-next'>
                    <div className='menu-list'>
                        <ul className="menu">
                            <div className="menu-item">
                                <li>HOME</li>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <div className="menu-item">
                                <li>NEW CAR</li>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <div className="menu-item">
                                <li>USED CAR</li>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <div className="menu-item">
                                <li>PAGES</li>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <div className="menu-item">
                                <li>CONTACT US</li>
                            </div>
                        </ul>
                    </div>
                    <div className='right-side'>
                        <div className='cart'>
                            <BsHandbag className='hand-bag' />
                            <div className='cart-numb'>
                                <span>Cart</span>
                                <span>(3)</span>
                            </div>
                        </div>
                        <div className="contact">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-telephone"
                                viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <div className='inquiry'>
                                <span className='more'>To More Inquiry</span>
                                <span className='number'>+556 318 804</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </header>
    )
}

export default NavBar
