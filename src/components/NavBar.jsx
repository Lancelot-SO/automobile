import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../assets/car-logo.png"
import Modal from './Modal';
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdPricetags, IoMdHeartEmpty, IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    toggleModal();
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  return (
    <header>
      <nav className="container">
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
          <div className='bars'>
            <div onClick={() => setNav(!nav)} className='design-bars'>
              {
                nav ? <FaTimes size={30} className='fatimes' /> : <FaBars size={30} className='fabars' />
              }
            </div>
            {nav && (
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
                      <li>HOME <IoIosArrowDown /></li>
                      <li>NEW CAR <IoIosArrowDown /></li>
                      <li>USED CAR <IoIosArrowDown /></li>
                      <li>PAGES <IoIosArrowDown /></li>
                      <li>CONTACT US</li>
                    </ul>
                  </div>
                  <div className='side-tags'>
                    <div className='side-sell-save'>
                      <div className='side-tag-sell'>
                        <IoMdPricetags />
                        <p>SELL WITH US</p>
                      </div>
                      <div className='side-tag-save'>
                        <IoMdHeartEmpty />
                        <p>SAVE</p>
                      </div>
                    </div>
                    <div className='side'>
                      <div className='side-signup' onClick={handleSignUpClick}>
                        <RiAccountCircleLine width={40} height={40} />
                        <button>Sign Up</button>
                      </div>
                      {showModal && (
                        <Modal onClose={toggleModal}>
                          <form>
                            <label>
                              Username:
                              <input type="text" name="username" />
                            </label>
                            <label>
                              Email:
                              <input type="email" name="email" />
                            </label>
                            <label>
                              Password:
                              <input type="password" name="password" />
                            </label>
                            <button type="submit">Sign Up</button>
                          </form>
                        </Modal>
                      )}
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
            )}
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
          <div className='tags'>
            <div className='sell-save'>
              <div className='tag-sell'>
                <IoMdPricetags />
                <p>SELL WITH US</p>
              </div>
              <div className='tag-save'>
                <IoMdHeartEmpty />
                <p className='mt-2'>SAVE</p>
              </div>
            </div>
            <div className='signup' onClick={handleSignUpClick}>
              <RiAccountCircleLine width={20} height={20} />
              <button>Sign Up</button>
              {showModal && (
                <Modal onClose={toggleModal}>
                  <form>
                    <label>
                      Username:
                      <input type="text" name="username" onClick={handleInputClick} />
                    </label>
                    <label>
                      Email:
                      <input type="email" name="email" onClick={handleInputClick} />
                    </label>
                    <label>
                      Password:
                      <input type="password" name="password" onClick={handleInputClick} />
                    </label>
                    <button type="submit">Sign Up</button>
                  </form>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </nav>


   <div className='container'>
   <section className='bottom-nav'>
        <div className='bottom-nav-next'>
          <div className='menu-list'>
            <ul className="menu">
              <li>HOME <IoIosArrowDown /></li>
              <li>NEW CAR <IoIosArrowDown /></li>
              <li>USED CAR <IoIosArrowDown /></li>
              <li>PAGES <IoIosArrowDown /></li>
              <li>CONTACT US</li>
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
                <path d="M3.654 1.328a.678.678 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2" />
              </svg>
              <div className='inquiry'>
                <span className='more'>To More Inquiry</span>
                <span className='number'>+556 318 804</span>
              </div>
            </div>
          </div>
        </div>
      </section>
   </div>
    </header>
  )
}

export default NavBar;
