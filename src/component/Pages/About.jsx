import React from 'react'
import Hero from '../Hero/Hero'
import aboutImg from "../../assets/night.jpg"
const About = () => {
  return (
    <>
    <Hero
    classN1="aboutClass"
    classN2="hero-txt"
    img={aboutImg}
    text1="About"
    
    btn="abtbtn"
    />
    </>
  )
}

export default About