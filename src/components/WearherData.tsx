import React, { useEffect, useState } from "react";
import InputNewCity from "./InputNewCity";

const WearherDataPromise = (city: string) => {
  const api_key = "YOUR API KEY"
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

  return new Promise((resolve, reject) => {
    fetch(api)
      .then(response => {
        return response.json()

      })
      .then(data => {
        let description = data.weather[0].description;
        let city = data.name;
        let temp = Math.round(parseFloat(data.main.temp));
        let result = { description: description, city: city, temp: temp, error: null };
        resolve(result);
      })
      .catch(error => {
        reject(error);
      })
  })
}

const WeatherData = (props: any) => {
  const [weather, setWeather] = useState({ description: "", city: "", temp: 0 })
  const [city, setCity] = useState("");

  useEffect(() => {
    let place = JSON.parse(localStorage.getItem('City') || '{}');
    console.log(place);
    if (Object.keys(place).length === 0) {
      localStorage.setItem('City', JSON.stringify("London"));
    }
    if (city !== "") {
      place = city;
    }
    WearherDataPromise(place)
      .then((data: any) => {
        localStorage.setItem('City', JSON.stringify(place));
        setWeather({ description: data.description, city: data.city, temp: data.temp - 273 })
      })
      .catch((error: any) => {
        alert('City not found');
        console.log(error)
      })
  }, [city])

  const onAddCityCallback = (city_str: string) => {
    setCity(city_str);
  }

  return (
    <div>
      <InputNewCity onAddCity={onAddCityCallback}></InputNewCity>
      <h2>{weather.city}</h2>
      <h3>{weather.description}</h3>
      <h3>{weather.temp} °C</h3>
    </div>
  )
}

export default WeatherData