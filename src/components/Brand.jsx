import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./Brand.css";
import suzuki from "../assets/suzuki.png";
import tesla from "../assets/tesla.png";
import toyota from "../assets/toyota.png";
import bmw from "../assets/bmw.png";
import honda from "../assets/honda.png"
import mazda from "../assets/mazda.png"
import car from "../assets/car.png";



const Brand = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();

    }, [])
    const brands = [
        { image: suzuki, alt: 'Suzuki' },
        { image: bmw, alt: 'BMW' },
        { image: toyota, alt: 'Toyota' },
        { image: tesla, alt: 'Tesla' },
        { image: honda, alt: 'Honda' },
        { image: mazda, alt: 'Mazda' },
    ];
    return (
        <div data-aos="flip-right" className='brands'>
            <TransitionGroup className='brand-board'>
                {brands.map((brand, index) => (
                    <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="fade-slide-in"
                    >
                        <div className='brand-card'>
                            <div className='brand-container'>
                                <img src={brand.image} alt={brand.alt} />
                                <img src={car} alt='suzuki' />
                            </div>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <TransitionGroup className='brand-board'>
                {brands.map((brand, index) => (
                    <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="fade-slide-in"
                    >
                        <div className='brand-card'>
                            <div className='brand-container'>
                                <img src={brand.image} alt={brand.alt} />
                                <img src={car} alt='suzuki' />
                            </div>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <div className='brand-cat'>
                <h4>There are 30+ Brands Categories Available</h4>
                <button>View More</button>
            </div>
        </div>
    );
}

export default Brand;
