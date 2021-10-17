import React from "react";

export default function Temperature(props){
  console.log(props.data);

    return (
    <div className="Temperature">
      <h1>
        <span id="big-temp">13</span>°C
      </h1>
      <hr />
      <p>
        <span id="max">14</span>°/<span id="min">9</span>°
      </p>
    </div>
  );
}