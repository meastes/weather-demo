import React from "react";

const Weather = ({ temperature, conditions }) => (
  <>
    <h1>Current Minneapolis Weather</h1>
    <h2 data-test="temperature">Temperature: {temperature}</h2>
    <h2 data-test="conditions">Conditions: {conditions}</h2>
  </>
);

export default Weather;
