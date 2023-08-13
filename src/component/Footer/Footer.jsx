import React from 'react'
import "./Footer.css"
// import "@mui/icons-material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="upper">
        
          <div className="left">
            <h2>Rahul</h2>
            <p>Choose Your Favourite Destination</p>
          </div>
          <div className="right">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
       
      </div>
      <div className="lower">
      <div className="divLower">
              <h2 className="colorClass">Project</h2>
              <a className="colorClass" href="/">Changelog</a >
              <a className="colorClass" href="/">Status</a >
              <a className="colorClass" href="/">License</a>
              <a className="colorClass" href="/">All Versions</a >
            </div>
            <div className="divLower">
              <h2 className="colorClass">Community</h2>
              <a className="colorClass" href="/">GitHub</a>
              <a className="colorClass" href="/">Issues</a>
              <a className="colorClass" href="/">Project</a>
              <a className="colorClass" href="/">Twitter</a>
            </div>
            <div className="divLower">
              <h2 className="colorClass">Help</h2>
              <a className="colorClass" href="/">Support</a>
              <a className="colorClass" href="/">Troubleshooting</a>
              <a className="colorClass" href="/">Contact Us</a>
            </div>
            <div className="divLower">
              <h2 className="colorClass">Others</h2>
              <a className="colorClass" href="/">Terms Of Services</a>
              <a className="colorClass" href="/">Privacy Policy</a>
              <a className="colorClass" href="/">License</a>
              
            </div>
      </div>
    </div>
    </>
  )
}

export default Footer