import React, { useState } from "react";
import axios from "axios";
import './App.css';
import Temperature from "./Temperature";
import IconDisplay from "./IconDisplay";
import PlaceTime from "./PlaceTime";
import WeatherExtras from "./WeatherExtras";
import Forecast from "./Forecast";
import Links from "./Links";

function App() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState({});

 
  function handleSubmit(event){
    event.preventDefault();
    let apiKey = `fa1047ba99073894a88e54f4a5673a70`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    axios.get(url).then(handleResponse);
  }

  function handleValue(event){
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="widget">
      <header>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text"
              className="form-control form-bar enter"
              placeholder="Enter City"
              onChange={handleValue}
          />
          <div className="input-group-append" id="button-addon4">
            <input
              type="submit"
              className="btn btn-outline-secondary search form-bar"
              value="Search"
            />
            <button
              className="btn btn-outline-secondary current form-bar"
              type="button"
              onClick={searchGeoLocation}
            >
              Current
            </button>
          </div>
        </div>
      </form>
      </header>
      <section className="current-weather">
          <div className="row">
            <div className="col-6">
              <div className="temp-box">
                <div className="row">
                  <div className="col-6">
                    <Temperature data={data}/>
                  </div>
                  <div className="col-6">
                    <IconDisplay />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <PlaceTime />
            </div>
          </div>
          <WeatherExtras />
        </section>
        <div className="forecast">
          <div id="forecast-box" className="container">
            <div className="row">
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
            </div>
          </div>
        </div>
      </div>
      <footer class="credit">
        <Links />
      </footer>
    </div>
  );
}

export default App;
