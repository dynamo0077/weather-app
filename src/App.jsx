import './App.css'
import { useState } from 'react';

const api = {
  key: "c081e3d1ee6d03aac20be34a958e97b7",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);


  const handleSearch = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then((result) => {
        setWeather(result);
      }); 
  }

  return (
    <div className='App'>

      {/* Header */}
      <header className='App-header'>
        <h1>Weather App</h1>
      </header>

      {/* Search Box */}
      <input type='text' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />

      {/* Search Button */}
      <button onClick={handleSearch} style={{ border: "1px solid blue" }}>Search</button>

      {weather ? (
        <div>
          {/* Location */}
          <h2>{weather.name}</h2>

          {/* Temperature */}
          <p>{Math.round(weather.main.temp)}°C</p>

          {/* Condition { Sunny } */}
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Search for a city to get the weather info.</p>
      )}
    </div>
  )
}

export default App;
