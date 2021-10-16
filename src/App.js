import './App.css';
import Form from "./Form.js";
import Temperature from "./Temperature";
import IconDisplay from "./IconDisplay";
import PlaceTime from "./PlaceTime";
import WeatherExtras from "./WeatherExtras";

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
        <footer className="forecast">
          <div id="forecast-box" className="container"></div>
        </footer>
      </div>
    </div>
  );
}

export default App;
