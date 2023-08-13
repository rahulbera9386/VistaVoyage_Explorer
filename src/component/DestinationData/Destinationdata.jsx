import React from 'react'
import "./DestinationData.css"
const Destinationdata = (props) => {
  return (
    <>
     <div className="dest-div">
      <h1>{props.h1Text}</h1>
      <p>{props.ptext}</p>
      <div className={props.className1}>
        <div className={props.className2}>
       <h2>{props.h2Text}</h2>
        <p>{props.pText}r?</p>
        </div>
      <div className={props.className3}>
        <img src={props.img1} alt="img"/>
        <img src={props.img2} alt="img"/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Destinationdata