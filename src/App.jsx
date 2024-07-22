import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import e from 'express';


const api_Key = {
  key: '6e06a1b430379e2e6e9895ab4c20dc09',
  base: 'https://api.openweathermap.org/data.2.5/',
};

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const searchPressed = () => {
    console.log('Search Pressed'); // test the search button returns this text in the console
  }


  // hold state of search term using useState
  const [search, setSearch] = useState(''); // empty string
  
  // make api call to weather 
  async function getWeatherData() {

    //make news api call to using axios
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}');
    setWeatherData(res.data.weather);
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div> 
      {/* Header */}
      <h1> Weather App </h1>

      {/* Search Bar */}
      <div>
        <input type='text' placeholder='Enter your city'
          onChange={(e) => setSearch(e.target.value)} // on change, take the event and access the value 
        />
        {/* get the data of the location (city) when Search is pressed */}
        <button onClick={searchPressed}>Search</button> 
      </div>

      {/* Location */}
      <p> Location </p>

      {/*  Condition */}
      <p> Sunny </p>
    </div>
  );
}

export default App;
