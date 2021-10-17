import React from "react";

export default function Temperature(props){
  console.log(props.data);

    return (
    <div className="Temperature">
      <h1>
        <span id="big-temp">{Math.round(props.data.main.temp)}</span>°C
      </h1>
      <hr />
      <p>
        <span id="max">{Math.round(props.data.main.temp_max)}
        </span>°/<span id="min">{Math.round(props.data.main.temp_min)}</span>°
      </p>
    </div>
  );
}