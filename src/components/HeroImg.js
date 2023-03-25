
import React from 'react'
import './HeroImgStyles.css'
import intro from '../images/intro2.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={intro} alt="" />
            </div>
            <div className='content'>
                <p>HI, I AM SOZAN </p>
                <h1>Front-end Developer</h1>
                <div>
                    <Link to='/project' className='btn'>PROJECTS</Link>
                    <Link to='/project' className='btn btn-light'>CONTACT</Link>

                </div>
            </div>
        </div>
    )
}

export default HeroImg