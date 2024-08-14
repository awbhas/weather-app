import React, { useEffect, useState } from 'react';
import axios from "axios";
import WeatherForm from "./components/WeatherForm.js";
import './App.css';



function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "API_KEY"; //Get your key from OpenWeatherMap

  const getWeather = async ()=>{
    try{
      setError('');
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    }
    catch(err){
      setError("City not found. Please enter a valid city name.");
      setWeather(null);
    }
  }
  // useEffect(() => {
  //   getWeather();
  // })
  

  return (
    <WeatherForm city={city} setCity={setCity} getWeather={getWeather} weather={weather} error={error}/> 
  )
}

export default App;
