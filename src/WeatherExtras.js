import React from "react";

let humidity = 78;
let wind = 3;

export default function Extra() {
  return (
    <div className="Extra">
      <ul className="extra-info">
        <li>
          Humidity: <span id="humidity">{humidity}</span>%
        </li>
        <li>
          Wind: <span id="wind">{wind}</span>km/h
        </li>
      </ul>
    </div>
  );
}