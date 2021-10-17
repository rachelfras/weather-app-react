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
        <div className="forecast">
          <div id="forecast-box" className="container"></div>
        </div>
      </div>
      <footer class="credit">
        <a
          href="https://github.com/rachelfras/weather-app-react"
          class="git-link"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <p> by Rachel Fraser</p>
        <div class="icon-credit">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/iconixar"
            title="iconixar"
            target="_blank"
            rel="noreferrer"
            >iconixar</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer"
            >www.flaticon.com</a
          >
        </div>
        </footer>
    </div>
  );
}

export default App;
