import React from 'react';
import backgroundVideoMP4 from '../videos/Bee/Bee.mp4';
import backgroundVideoWEBM from '../videos/Bee/Bee.webm';

const BackgroundVideo = () => (
  <video id="background-video" loop autoPlay>
    <source src={ backgroundVideoMP4 } type="video/mp4" />
    <source src={ backgroundVideoWEBM } type="video/webm" />
    Your browser does not support the video tag. Please download or update your version of Chrome, Firefox or Safari.
  </video>
);

export default BackgroundVideo;