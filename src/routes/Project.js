import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading='PROJECTS' text='Some of my works'/>
    <WorkCard/>
    <Footer/>
    </div>
  )
}

export default Project