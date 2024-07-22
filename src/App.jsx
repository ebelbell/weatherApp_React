import { useState } from 'react'
import './App.css'


const api = {
  key: '6e06a1b430379e2e6e9895ab4c20dc09',
  base: 'https://api.openweathermap.org/data.2.5/',
};


function App() {
  // hold state of search term using useState
  const [search, setSearch] = useState(''); // empty string
  // hold the weather data
  const [weather, setWeatherData] = useState({});


  // TESTING THE SEARCH BUTTON
  // const searchPressed = () => {
  //   console.log('Search Pressed'); // test the search button returns this text in the console
  //   console.log(search); // print the search term when the user types in a city 
  // };

  const searchPressed = () => {
    if (search.trim() === '') {
      console.error('Search term is empty');
      return;
    }

    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`) // specify api key and use search query
    //get the results back and return a json object using the json method
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      });
};
  
  // // make api call to weather 
  // async function getWeatherData() {

  //   //make news api call to using axios
  //   const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_Key}');
  //   setWeatherData(res.data.weather);
  // }

  // useEffect(() => {
  //   getWeatherData();
  // }, []);

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
      {/* the city that the user searches */}
      <p> {weather.name} </p>  

      {/*  Condition */}
      <p> {weather.weather[0].main} </p>
    </div>
  );
}

export default App;
