import React from "react";
import ResponsiveDrawer from "./components/Sidebar";
import Header from "./components/Header";
import WeatherApp from "./components/WeatherApp";
function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <WeatherApp/>
    </div>
  );
}

export default App;