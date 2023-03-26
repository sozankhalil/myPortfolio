import './AboutContentStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import topImg from '../images/react1.webp'
import bottomImg from '../images/react2.jpg'

function AboutContent() {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who am I?</h1>
                <p>I am  a react front-end developer </p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={topImg} className='img' alt="top" />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={bottomImg} className='img' alt="bottom" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent