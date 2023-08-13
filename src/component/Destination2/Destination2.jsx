import React from 'react'
import des2img1 from "../../assets/1.jpg"
import des2img2 from "../../assets/2.jpg"
import Destinationdata from '../DestinationData/Destinationdata'
const Destination2 = () => {
  return (
    <>
        <Destinationdata
     className1="dest-main-2"
     className2="dest-text"
     h2Text="Varanasi, India"
     pText="Embark on a spiritual odyssey to Varanasi, India's timeless city of spiritual significance, where the ancient Ghats along the sacred Ganges River bear witness to centuries of rituals, illuminating a tapestry of life, death, and rebirth, while the narrow alleys bustle with the fragrance of incense, the vibrant colors of traditional textiles, and the hum of soul-stirring chants, creating an immersive experience that resonates deep within the soul and connects you to the essence of India's spiritual essence."
 className3="dest-img"
 img1={des2img1}
 img2={des2img2}
    />
    </>
  )
}

export default Destination2