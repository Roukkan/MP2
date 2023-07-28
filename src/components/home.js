import React from 'react';
import { RiMapPin2Line, RiArrowRightLine } from 'react-icons/ri';
import { Carousel } from 'react-responsive-carousel';
import './home.css';
import { Aboutus, Sponsors } from '../index';

const Home = () => {
  return (
    <div className="whole">
      <Carousel autoPlay={false} infiniteLoop showStatus={false} showThumbs={false}>
        <div className="container1">
          <div className="firstcolumn" id="equalpart">
            <p className="p1">
              <RiMapPin2Line /> Boracay, Philippines
            </p>
            <h1>BORACAY ISLAND</h1>
            <p className="p2">
              Boracay Island in the Philippines is a captivating tropical paradise known for its stunning white sandy
              beaches, clear waters, and vibrant nightlife. It offers diverse activities, accommodations, and experiences
              for all types of travelers, making it an unforgettable destination.  Along the west coast, White Beach is backed by palm trees, 
              bars and restaurants. On the east coast, strong winds make Bulabog Beach a hub for water sports.
            </p>
            <p className="explore">
              <a href="/Boracay" className="explore">
                EXPLORE NOW! <RiArrowRightLine />
              </a>
            </p>
          </div>
          <div className="secondcolumn" id="equalpart"></div>
        </div>

        <div className="container2">
          <div className="firstcolumn" id="equalpart">
            <p className="p1">
              <RiMapPin2Line /> Palawan, Philippines
            </p>
            <h1>Palawan Island</h1>
            <p className="p2">
            Palawan is a slice of heaven, a sliver of an island that teems with exotic wildlife, quaint fishing villages, 
            and UNESCO World Heritage Sites. Wave hello to endangered animals at the Calauit Game Preserve and Wildlife Sanctuary 
            or explore the Japanese shipwrecks of Coron Island, regarded as one of the best dive sites in the world. A guided boat 
            tour of the Puerto Princesa Underground River will take your breath away.
            </p>
            <p className="explore">
              <a href="/Palawan" className="explore">
                EXPLORE NOW! <RiArrowRightLine />
              </a>
            </p>
          </div>
          <div className="secondcolumn" id="equalpart"></div>
        </div>

        <div className="container3">
          <div className="firstcolumn" id="equalpart">
            <p className="p1">
              <RiMapPin2Line /> Bohol, Philippines
            </p>
            <h1>Bohol Island</h1>
            <p className="p2">
            Bohol is a province of the Philippines, in the country’s Central Visayas region. It comprises Bohol Island and numerous 
            smaller surrounding islands. Bohol is known for coral reefs and unusual geological formations, notably the Chocolate Hills. 
            On the main island, near the town of Carmen, these 1,200 or so symmetrical mounds turn cocoa-brown in the dry season, 
            contrasting with the surrounding jungle's greenery.
            </p>
            <p className="explore">
              <a href="/Bohol" className="explore">
                EXPLORE NOW! <RiArrowRightLine />
              </a>
            </p>
          </div>
          <div className="secondcolumn" id="equalpart"></div>
        </div>
        
      </Carousel>
      <Aboutus />
      <Sponsors />
    </div>
  );
};

export default Home;
