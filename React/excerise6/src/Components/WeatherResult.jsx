import * as React from 'react'
import { useLocation } from 'react-router-dom'
import FetchedWeatherData from '../Utils/WeatherDetails';


function WeatherResult() {

  const location = useLocation();

  const city = location.state.cityName
  // console.log(city);

  if (city === undefined) {
    return (
      <h1>Error 404! You have to enter the city name</h1>
    );
  }

  return (
    <div>
      <FetchedWeatherData city={city}></FetchedWeatherData>
    </div>
  )
}

export default WeatherResult