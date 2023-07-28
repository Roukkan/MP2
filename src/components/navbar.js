import React from 'react'
import './navbar.css'
import Photo from './assets/EnviroQuest.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <section className="section">
            <img src={Photo} alt="LOGO" width={70}/>
            <a href="/"> <h3>ENVIRO QUEST</h3></a>
            <p><a href="/">Home</a></p>
            <p><a href="/calculator">Ecological Footprint</a></p>
            <p><a href="/Videos">Resources</a></p>
          </section>
    </div>
  )
}

export default Navbar
