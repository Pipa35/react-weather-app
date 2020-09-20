import React from "react";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function iconWeather() {
    let iconWeather = props.data.weather[0].icon;
    return `https://openweathermap.org/img/wn/${iconWeather}.png`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}ºC`;
  }

  console.log(iconWeather());

  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <img src={iconWeather()} alt="error" className="float-left"></img>
      {temperature()}
    </div>
  );
}
