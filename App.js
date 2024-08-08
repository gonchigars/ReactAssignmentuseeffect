import './App.css';
import PersistentDrawerLeft from './components/Header';
import WeatherWidget from './components/WeatherGrid'

const App = () => {
  return (
    <div>
      <PersistentDrawerLeft />
      <WeatherWidget/>
    </div>
  );
};

export default App;