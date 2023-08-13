import React from 'react'
import Trip1 from "../../assets/5.jpg"
import Trip2 from "../../assets/6.jpg"
import Trip3 from "../../assets/4.jpg"
import Tripdata from '../TripData/Tripdata'
const Trip = () => {
  return (
    <>
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="trip-card">
      <Tripdata
      img={Trip1}
      htext="Trip in malyasia"
      ptext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In animi soluta esse vitae cupiditate. Error quisquam odit adipisci non recusandae? Quos quia odit mollitia labore maxime quis ipsam quo aut amet perspiciatis!"
      />
      <Tripdata
      img={Trip2}
      htext="Trip in malyasia"
      ptext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In animi soluta esse vitae cupiditate. Error quisquam odit adipisci non recusandae? Quos quia odit mollitia labore maxime quis ipsam quo aut amet perspiciatis!"
      />
      <Tripdata
      img={Trip3}
      htext="Trip in malyasia"
      ptext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In animi soluta esse vitae cupiditate. Error quisquam odit adipisci non recusandae? Quos quia odit mollitia labore maxime quis ipsam quo aut amet perspiciatis!"
      />
      </div>
    </div>
    </>
  )
}

export default Trip
