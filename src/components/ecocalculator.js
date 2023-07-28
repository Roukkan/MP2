import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './ecocalculator.css';
import {Aboutus, Sponsors} from '../index';

const housingTypes = [
  { label: 'Apartment', footprint: 1 },
  { label: 'House', footprint: 1.6 }, 
  { label: 'Villa', footprint: 2.1 },
];

const EcologicalFootprintCalculator = () => {
  const [housingType, setHousingType] = useState(housingTypes[0]);
  const [housingFootprint, setHousingFootprint] = useState(0);
  const [carMotorcycleTravelDistance, setCarMotorcycleTravelDistance] = useState(0);
  const [foodEmissions, setFoodEmissions] = useState(0);
  const [quirkyResult, setQuirkyResult] = useState('');
  const foodEmissionsLabels = ['never', 'infrequently', 'occasionally', 'often', 'very often'];
  const [ecologicalFootprint, setEcologicalFootprint] = useState(0);


  useEffect(() => {
    const calculatedEcologicalFootprint = calculateEcologicalFootprint();
    setEcologicalFootprint(calculatedEcologicalFootprint);
  }, [housingType, carMotorcycleTravelDistance, foodEmissions]);


  const calculateEcologicalFootprint = () => {
    const housingEcologicalFootprint = housingType * (housingFootprint / 100);
    const transportationEcologicalFootprint = (carMotorcycleTravelDistance * 0.15) / 100;
    const foodEmissionsEcologicalFootprint = (foodEmissions * 2.5 * 7) / 100;
    const totalEcologicalFootprint = housingEcologicalFootprint + transportationEcologicalFootprint + foodEmissionsEcologicalFootprint;
    
        let result = '';
        if (totalEcologicalFootprint < 5) {
          result = "Wow! You're living an eco-friendly lifestyle!";
        } else if (totalEcologicalFootprint >= 5 && totalEcologicalFootprint < 15) {
          result = "You're doing well, but there's still room for improvement!";
        } else if (isNaN(totalEcologicalFootprint)) {
          result = "Wow! You're living an eco-friendly lifestyle!";  
        } else {
          result = "Uh-oh! It's time to reduce your carbon footprint!";
        }
        setQuirkyResult(result);
  };


  const sliderWidth = 300;
  const carouselheight = 100;



  const handleHousingTypeChange = (event) => {
    setHousingType(event.target.value);
  };

  return (
    <div className='whole'>
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }} className='blurry-background'>
      <CardHeader title="Ecological Footprint Calculator" />
      <CardContent>
        <Carousel animation="slide" showArrows={true} showThumbs={false} dynamicHeight={true} showIndicators={false}>

        <div style={{ width: sliderWidth, margin:'0 auto'}}>
            <Typography id="housing-type-question" gutterBottom>
              Which housing type best describes your home?
            </Typography>

            <RadioGroup
              aria-labelledby="housing-type-question"
              value={housingType}
              onChange={handleHousingTypeChange}
            >
              {housingTypes.map((type) => (
                <FormControlLabel
                  key={type.label}
                  value={type.footprint}
                  control={<Radio />}
                  label={type.label}
                />
              ))}
            </RadioGroup>
            
            <Typography id="housing-slider" gutterBottom>
              What is the size of your home's footprint in square meters? (🏠)
              <br />
              {housingFootprint} m²
            </Typography>
            <Slider
              value={housingFootprint}
              onChange={(e) => setHousingFootprint(parseFloat(e.target.value))}
              min={0}
              max={1000}
              step={1}
              valueLabelDisplay="auto"
              aria-labelledby="housing-slider"
            />
            <br />

          </div>
          
         <div style={{ width: sliderWidth, margin:'0 auto' }}>
            <Typography id="car-motorcycle-question" gutterBottom>
              How far do you travel by car or motorcycle each week? (as a driver or passenger)
            </Typography>
            <br />{carMotorcycleTravelDistance} km
            <Slider
              value={carMotorcycleTravelDistance}
              onChange={(e) => setCarMotorcycleTravelDistance(parseFloat(e.target.value))}
              min={0}
              max={1000} 
              step={1}
              valueLabelDisplay="auto"
              aria-labelledby="car-motorcycle-question"
            />
          </div>

          <div style={{ width: sliderWidth, margin:'0 auto'}}>
            <Typography id="food-question" gutterBottom>
              How often do you eat animal-based products?
              <br />
              (beef, pork, chicken, fish, eggs, dairy products)
            </Typography>
            <br />
            
            <Slider
              value={foodEmissions}
              onChange={(e) => setFoodEmissions(parseFloat(e.target.value))}
              min={0}
              max={4}
              step={1}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => foodEmissionsLabels[value]}
              aria-labelledby="food-question"
            />
          </div>



           <div style={{ width: sliderWidth, margin:'0 auto', height: carouselheight}}>
           {quirkyResult && <p>{quirkyResult}</p>}
           <br />
           <br />
            {/* <Button variant="contained" color="success" onClick={calculateEcologicalFootprint}>
            Calculate
            </Button> */}


                     
          </div>
        </Carousel>

      </CardContent>
    </div>
    <br />
    <Aboutus/>
    <Sponsors/>
    </div>
  );
};

export default EcologicalFootprintCalculator;
