import axios from "axios";

const apikey = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};
