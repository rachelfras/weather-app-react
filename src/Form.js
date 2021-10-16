import React from "react";
import "./form.css";

export default function Form(){
    return (
        <div className="Form">
            <form>
                <div>
                    <input type="text"
                    className="form-control form-bar enter"
                    placeholder="Enter City"
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
            >
              Current
            </button>
          </div>
                </div>
            </form>
        </div>
    )
}