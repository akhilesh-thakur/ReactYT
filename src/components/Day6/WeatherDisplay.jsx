// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ data }) => {
  const { location, current } = data;

  return (
    <div>
      <h2>{location.name}</h2>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Condition: {current.condition.text}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default WeatherDisplay;
