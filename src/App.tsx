import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherData from './components/WearherData';
import InputNewCity from './components/InputNewCity';


function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherData city="Tartu"/>
    </div>
  );
}

export default App;
