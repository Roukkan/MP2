import React from 'react'
import './aboutus.css'
import Photo from './assets/palawan.jpg'
const Aboutus = () => {
  return (
    <div className='about-container' id="boxes">
      <div className="left-part">
        <img src={Photo} alt="" width='100'/>
        <p className="first-paragraph" id='blur-background'> Welcome to Enviro Quest Philippines! We are your go-to website for discovering the enchanting beauty of the Philippines while promoting sustainability and responsible travel practices. 
        <br />
        Our mission is to provide comprehensive information about the country's mesmerizing tourist spots, along with valuable tips on how to travel responsibly without causing harm to our precious nature.</p>
      </div>
      <div className="right-part" id="boxes">
        <p className="second-paragraph" id='blur-background'> At Enviro Quest Philippines, we believe in the importance of preserving the pristine natural wonders of the Philippines for future generations. We offer detailed guides on eco-friendly destinations, sustainable activities, and local communities that embrace environmentally conscious practices. From breathtaking beaches to lush forests, our website showcases a diverse range of destinations that will leave you awe-inspired.
          <br />
          <br />
          We understand that every travel experience should be enjoyable while respecting the environment and supporting local communities. That's why we provide insightful tips on reducing your ecological footprint, supporting eco-friendly accommodations and tours, and engaging in meaningful cultural exchanges. Together, we can make a positive impact and ensure the preservation of the Philippines' natural treasures.
          <br />
          <br />
          Join us on this incredible journey of exploration, discovery, and sustainability. Let's embark on unforgettable adventures while being mindful of our planet. Start planning your eco-friendly trip with Enviro Quest Philippines today!</p>
      </div>
    </div>
  )
}

export default Aboutus
