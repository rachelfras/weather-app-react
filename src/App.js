import './App.css';
import Form from "./Form.js";
import Temperature from "./Temperature";
import IconDisplay from "./IconDisplay";
import PlaceTime from "./PlaceTime";
import WeatherExtras from "./WeatherExtras";
import Forecast from "./Forecast";
import Links from "./Links";

function App() {
  return (
    <div className="App">
      <div className="widget">
      <header>
        <Form />
      </header>
      <section className="current-weather">
          <div className="row">
            <div className="col-6">
              <div className="temp-box">
                <div className="row">
                  <div className="col-6">
                    <Temperature />
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
