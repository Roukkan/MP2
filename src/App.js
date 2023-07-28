
import Calculator from './components/ecocalculator';
import Home from './components/home'
import {Navbar} from './index';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Boracay from './components/boracay';
import Videos from './components/YouTubeCarousel';
import Palawan from './components/palawan';
import Bohol from './components/Bohol';


const App = () => {

  return (
    <div className='whole'>
      <div  className='background'>
     
      <Router>
      <Navbar />
        <Routes>
        <Route index element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Boracay" element={<Boracay />} />
        <Route path="Palawan" element={<Palawan />} />
        <Route path="Bohol" element={<Bohol />} />
        <Route path="Videos" element={<Videos />} />
        </Routes>
      </Router>
      </div>
    </div>
    
   
  );  
}

export default App;
