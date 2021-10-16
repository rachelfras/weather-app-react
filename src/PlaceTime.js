import React from "react";

let city = "Edinburgh, GB";
let day = "Friday";
let hour = 16;
let minute = 34;
let time = `${hour}:${minute}`;
let weather = "Clouds";

export default function PlaceTime(){
    return (
    <div className="PlaceTime">
      <h2 className="location-display">{city}</h2>
      <h3 className="date-time">
        <span id="weekday">{day}</span>
        <span id="time"> {time}</span>
      </h3>
      <p id="description">{weather}</p>
    </div>
  );

}