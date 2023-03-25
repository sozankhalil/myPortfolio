import './WorkCardStyles.css'
import React from 'react'
import img1 from '../images/pro2.PNG'
import img2 from '../images/pro1.PNG'
import img3 from '../images/pro3.PNG'
import { NavLink } from 'react-router-dom'

function WorkCard() {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>PROJECTS </h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src={img1} alt="image" />
                    <h2 className='project-title'>The Rick and Morty API</h2>
                    <div className='pro-details'>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sequi deleniti unde vero pariatur impedit, voluptatibus nulla repudiandae dignissimos exercitationem id iure debitis laudantium eaque explicabo reprehenderit eligendi dolores eius?</p>
                        <div className='pro-btns'>

                            <NavLink to='url.com' className='btn '>Source</NavLink>
                        </div>
                    </div>
                </div>
              
               
            </div>
        </div>
    )
}

export default WorkCard