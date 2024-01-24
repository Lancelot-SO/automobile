import React from 'react'
import "./Recommended.css"
import think from "../assets/man-thinking.png"

const Recommended = () => {
    return (
        <div className='recommended'>
            <div className='recommend'>
                <div className='car-recommend'>
                    <div className='text'>
                        <h3>Recommended Car</h3>
                        <h1>Not sure, Which Car is Best?</h1>
                    </div>
                    <img src={think} alt='think' />
                </div>
                <div className='btn-p'>
                    <p>A car that is dependable and has a low risk of breakdowns is highly desirable.</p>
                    <button>Show me best car</button>
                </div>
            </div>
        </div>
    )
}

export default Recommended
