import React from 'react'
import './Home.css'
import 'animate.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import naruto from './Image/naruto2.jpg'
const Home = () => {
    return (
        <div>
            <div className='home-cont'>
                <div className="animate__animated animate__rubberBand animate__delay-2s sec1">
                    <div className='sec1-text'>
                        <h1>Hi,My name is <span className='span'>Egbebi Hamid</span></h1>
                        <h1>A Front-end developer </h1>
                        <p>Welcome to my officall Portfolio Website Where I put all my work related to my designs and many more </p>
                        <Link to='/Contact'><button>Contact me</button></Link>
                    </div>
                    <div>
                        <img className='rounded-circle' src={naruto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
