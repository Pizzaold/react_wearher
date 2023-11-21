import React from 'react';
import './App.css';
import WeatherData from './components/WearherData';


function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherData city="London"/>
    </div>
  );
}

export default App;
