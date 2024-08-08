import React, { useState, useEffect } from "react";
import axios from 'axios';
function WeatherWidget(){
    const [city,setcity]= useState('Odisha');
    const [weather, setweather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,setError]= useState(null);
    useEffect(()=>{
        const fetchweather=async () =>{
          setLoading(true);
          setError(null);
            try {
                const API_KEY='28bc794d0a16ca0eda029ab2a3d2c87d';

                
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
                setweather(response.data);
              } catch (error) {
                setError('Error fetching user:', error);
              } finally {
                setLoading(false);
              }
            };
        
            fetchweather();
          }, [city]);
          const handleCityChange= (event)=>
            {setcity(event.target.value)};

          

        return (
            <div>
              <form>
                <input
                  type="text"
                  value={city}
                  onChange={handleCityChange}
                  placeholder="Enter city"
                />
              </form>
        
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {weather && !loading && !error && (
                <div>
                  <h2>{weather.name}</h2>
                  <p>{weather.weather[0].description}</p>
                  <p>Temperature: {weather.main.temp}°C</p>
                  <img
                    src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                    alt="Weather icon"
                  />
                </div>
              )}
            </div>
          );
        
}
        export default WeatherWidget;
        