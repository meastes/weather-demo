import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

const API_URL =
  "https://wt-963c8587ada95a5326f2d7120e3a103c-0.sandbox.auth0-extend.com/weather/get";

class App extends Component {
  state = {
    temperature: null,
    conditions: null
  };

  async componentDidMount() {
    const data = await (await fetch(API_URL)).json();
    const { temperature, summary: conditions } = data.currently;
    this.setState({ temperature, conditions });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.temperature && (
            <Weather
              temperature={this.state.temperature}
              conditions={this.state.conditions}
            />
          )}
          <a
            className="App-link"
            href="https://darksky.net/poweredby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Dark Sky
          </a>
        </header>
      </div>
    );
  }
}

export default App;
