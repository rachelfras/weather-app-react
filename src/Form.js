import React, { useState } from "react";
import axios from "axios";
import "./form.css";

export default function Form(){
  const [city, setCity] = useState(null);

  function handleSubmit(event){
    event.preventDefault();
    //let apiKey = `fa1047ba99073894a88e54f4a5673a70`;
    //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    alert(city);
  }

  function handleValue(event){
    setCity(event.target.value);
  }

  function displayCity(response){
    let current = `${response.data.name}, ${response.data.sys.country}`;
    alert(current);
  }

  function giveCurrent(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiKey = `fa1047ba99073894a88e54f4a5673a70`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    
    axios.get(`${apiUrl}&units=${units}&appid=${apiKey}`).then(displayCity);
}

  function searchGeoLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(giveCurrent);
  }

  return (
    <div className="Form">
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
    </div>
    )
}