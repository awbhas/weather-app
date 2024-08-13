import React from "react";

export default function weather(props) {
  const handleSearch = (event) => {
    event.preventDefault();
    if (props.city) {
      props.getWeather();
    }
  };
  const handleChange = (event) => {
    props.setCity(event.target.value);
  };
  return (
    <div className="container my-5">
      <h1 className="text-center">Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Enter City Name"
          onChange={handleChange}
          value={props.city}
        />
        <button type="submit" class="btn btn-primary my-2">
          Get Weather
        </button>
      </form>

      {props.weather && (
        <div className="details">
          <h2>{props.weather.name}</h2>
          <p>{props.weather.weather[0].description}</p>

          <div className="Tab">
            <p>Temperature {props.weather.main.temp}°C</p>
            <p>Humidity {props.weather.main.humidity}%</p>
            <p>Wind Speed {props.weather.wind.speed} m/s</p>
          </div>
        </div>
      )}

      {props.error && <p>{props.error}</p>}
    </div>
  );
}
