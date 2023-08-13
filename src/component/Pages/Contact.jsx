import React from 'react'
import Hero from '../Hero/Hero'
import contactImg from "../../assets/1.jpg"


const Contact = () => {
  return (
   <>
   <Hero
    classN1="contactClass"
    classN2="hero-txt"
    img={contactImg}
    text1="Contact"
    
    btn="abtbtn"
    />
   </>
  )
}

export default Contact