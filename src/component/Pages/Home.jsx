import React from 'react'
import Hero from '../Hero/Hero'
import imgp from "../../assets/12.jpg"
import Destination from '../Destination/Destination'
import Destination2 from "../Destination2/Destination2"
import Trip from '../Trip/Trip'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
    <Hero
    classN1="hero"
    classN2="hero-txt"
    img={imgp}
    text1="Your Journey Your Story"
    text2="Choose YOur Favourite Destination"
    urltext="Travel Plan"
    btn="btn"
    />
   <Destination/>
  <Destination2/>
 <Trip/>
 <Footer/>
    </>
  )
}

export default Home