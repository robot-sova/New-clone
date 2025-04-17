// ParallaxHeader.jsx
import React from 'react';

const ParallaxHeader = () => {
  return (
    <div className="video-container">
      <video
        id="bgVideo"
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/bg.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        Your browser does not support the video tag.
      </video>

      <div className="maintext">
        <h1>Same-Day Oven Repair Services</h1>
        <p>
        At Same Day Appliance Repair, we understand how essential a well-functioning oven is to your home. Whether you have a wall oven, gas oven, or electric oven, our expert technicians provide comprehensive oven repair services throughout Los Angeles and surrounding areas. With years of appliance repair experience, we service all major oven brands, including Wolf, Thermador, LG, Whirlpool, and more. We know that when your oven has a problem—whether it's a heating issue, a malfunctioning broil burner, or a stuck oven door—it disrupts your daily routine. That's why our technicians work efficiently and use only original replacement parts to ensure your oven is restored to safe temperature operation.
        </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
