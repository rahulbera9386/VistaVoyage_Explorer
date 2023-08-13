import React from 'react'
import "./Destination.css"
import destImg1 from "../../assets/1.jpg"
import destImg2 from "../../assets/2.jpg"
import Destinationdata from '../DestinationData/Destinationdata'

const Destination = () => {
  return (
    <>
    <Destinationdata
    className1="dest-main"
    className2="dest-text"
    h1Text="Destination"
    ptext="Discover the harmony of ancient traditions and modern marvels in Kyoto, Japan – where timeless temples meet bustling urban life."
    h2Text="Jaipur, Rajasthan"
    pText="Welcome to the vibrant city of Jaipur, often referred to as the Pink City due to the distinctive color of its buildings. Nestled in the heart of Rajasthan, Jaipur is a treasure trove of rich history, royal architecture, and vibrant culture.

    Explore the majestic Amer Fort, a UNESCO World Heritage Site, with its intricate carvings, sprawling courtyards, and stunning views of the surrounding landscape. Stroll through the bustling bazaars of the old city, where you can shop for traditional handicrafts, textiles, and jewelry.
    
    Don't miss the iconic Hawa Mahal, also known as the Palace of Winds, an architectural marvel with its intricately latticed windows that allowed royal women to observe street festivities without being seen."
className3="dest-img"
img1={destImg1}
img2={destImg2}

    />
{/* <Destination2/> */}
    
    </>
  )
}

export default Destination