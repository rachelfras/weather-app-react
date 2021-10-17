import React from "react";
import weatherIcon from "./icons/04d.svg";

export default function Forecast(){
    
    return(
          <div class="col-2 forecast-box-display">
            <div class="forecast-day">Mon</div>
            <div class="future-numbers">
              <span id="forcast-max"
                 >12°</span>
              <span id="forecast-min"
                 >9°</span>
            </div>
            <img src={weatherIcon} 
                alt="cloudy"
                width="42"
                class="future-icon" />
          </div>  
    );
}