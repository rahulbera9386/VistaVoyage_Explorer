import React from 'react'
import "./Tripdata.css"
const Tripdata = (props) => {
  return (
    <>
    <div className="t-card">
      <div className="t-img">
      <img src={props.img} alt="img"/>
      </div>
      <div className="t-desc">
        <h2>{props.htext}</h2>
        <p>{props.ptext}</p>
      </div>
    </div>
    </>
  )
}

export default Tripdata;