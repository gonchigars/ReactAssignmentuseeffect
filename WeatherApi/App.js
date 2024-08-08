import React from "react";
import WeatherApi from "./WeatherApi"; // Ensure WeatherApi is in the same src directory
import "./WeatherApi"; // Import global styles if any

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <WeatherApi /> {/* Render the WeatherApi component */}
      </main>
    </div>
  );
}

export default App;
