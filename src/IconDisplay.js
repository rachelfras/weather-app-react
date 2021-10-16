import React from "react";
import weatherIcon from "./icons/04d.svg";

export default function IconDisplay(){
    return (
    <div className="Icon">
      <img className="icon-display" id="icon" src={weatherIcon} alt="" />
    </div>
  );
}