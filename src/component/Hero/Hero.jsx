import React from 'react'
import "./Hero.css"

const Hero = (props) => {
  return (
   <>
   <div className={props.classN1}>
    <img alt="#" src={props.img}/>
    <div className={props.classN2}>
      <h1>{props.text1}</h1>
      <p>{props.text2}</p>
      <button className={props.btn} href={props.url}>{props.urltext}</button>
    </div>
    
   </div>
   </>
  )
}

export default Hero