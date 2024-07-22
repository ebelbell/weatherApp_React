import { useState, useEffect } from 'react'
import './App.css'


const api = {
  key: '906a02ced318c571bc872bbb35f588b3',
  base: 'https://api.openweathermap.org/data.2.5/',
};


function App() {
  // hold state of search term using useState
  const [search, setSearch] = useState(''); // empty string
  // hold the weather data
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [weather, setWeather] = useState(null);



  // TESTING THE SEARCH BUTTON
  // const searchPressed = () => {
  //   console.log('Search Pressed'); // test the search button returns this text in the console
  //   console.log(search); // print the search term when the user types in a city 
  // };

  useEffect(() => {
    // fetch weather data
    const cityEntry = 'New York'; // example 
    fetchWeatherData(cityEntry, null, null);
  }, []); // empty dependency array means this runs once after the initial render

  const fetchWeatherData = (city, lat, lon) => {
    let url = '';

    if (city) {
      // Search by city name
      url = `${api.base}weather?q=${city}&units=metric&appid=${api.key}`;
    } else if (lat && lon) {
      // Search by latitude and longitude
      url = `${api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`;
    } else {
      setError('Search term or Latitude and Longitude are required');
      return;
    }
  }

  const searchPressed = () => {
    if (search.trim() === '') {
      console.error('Search term is empty');
      return;
    }

    // fetch(`{api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`) // specify api key and use search query
    // //get the results back and return a json object using the json method
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setWeather(result);
    //   });
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
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setSearch(e.target.value)}
        />

        <input type='text' placeholder='Enter latitude'
          onChange={(e) => setLat(e.target.value)} // on change, take the event and access the value 
        />
        {/* get the data of the location (city) when Search is pressed */}
        <button onClick={searchPressed}>Search</button> 
      </div>

      {/* Location */}
      {/* the city that the user searches */}
      {/* <p> {weather.name} </p>   */}

      {/*  Condition */}
      {/* <div>
        <p> {weather.weather[0].main} </p>
      </div> */}

    </div>
  );
}

export default App;
