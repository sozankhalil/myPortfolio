import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='ABOUT' text='I am a self-taught programmer. My skills include JavaScript, React and Node.js.I am passionate about creating user-friendly and responsive web applications.My personal traits include attention to detail, creativity, and adaptability.' />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About