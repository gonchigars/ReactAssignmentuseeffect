import './App.css';
import Header from './component/Header';
import ResponsiveDrawer from './component/Sidebar';
import WeatherWidget from './component/WeatherWidget';
import { UserProfile } from './component/User'; 


function App() {
  return (
    <div >
      <Header/>
      <ResponsiveDrawer/>
      <WeatherWidget/>
      < UserProfile/>
     
   
    </div>
  );
}

export default App;