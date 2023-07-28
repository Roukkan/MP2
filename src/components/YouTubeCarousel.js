import './YouTubeCarousel.css';

import React from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const YouTubeCarousel = () => {
  const youtubeVideoIds = [
    'QQYgCxu988s',
    'WmVLcj-XKnM',
    '9uxErjim7S8',
    // Add more YouTube video IDs here
  ];

  const opts = {
    height: '360',
    width: '440',
    playerVars: {
      // Add any additional playerVars you want
    },
  };

  return (
    <div style={{ maxWidth: '90%', margin: '0 auto', padding: '20px' }}>
      <h2 className='VideoTitle'>Environmental Awareness Videos</h2>
      <Carousel showThumbs={false}>
        {youtubeVideoIds.map((videoId) => (
          <div key={videoId}>
            <YouTube videoId={videoId} opts={opts} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default YouTubeCarousel;
