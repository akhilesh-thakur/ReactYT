// WeatherApp.js
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(''); // Default location

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [location]);

  const handleSearch = (searchLocation) => {
    setLocation(searchLocation);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default Weather;
