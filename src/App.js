import React from "react";
import ResponsiveDrawer from "./components/Sidebar";
import Header from "./components/Header";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div>
      <Header />
      <WeatherApp />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <WeatherApp />
      </main>
    </div>
  );
}

export default App;