import React from "react";

export default function Temperature(){
    return (
    <div className="Temperature">
      <h1>
        <span id="big-temp">12</span>°C
      </h1>
      <hr />
      <p>
        <span id="max">14</span>°/<span id="min">11</span>°
      </p>
    </div>
  );
}