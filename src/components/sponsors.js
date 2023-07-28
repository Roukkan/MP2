import React from 'react';
import './sponsors.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import images from './images';

const Sponsors = () => {
    const right = 0;
    const left = -1455;
    const carousel = useRef();

    return (
        <div className="app2">
            <h2>SPONSORS</h2>
            <motion.div ref={carousel} className="carousel">
                <motion.div
                     // Add back the drag properties to allow carousel dragging
                    dragConstraints={{ left: right, right: left }}
                    className="inner-carousel"
                    animate={{
                        x: [right, left, right],
                    }}
                    transition={{
                        duration: 30, // Adjust the duration based on your preference
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                >
                    {images.map((image, index) => (
                        <motion.div className='item' key={index}>
                            <div className="item-container">
                                <img src={image} alt="" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Sponsors;