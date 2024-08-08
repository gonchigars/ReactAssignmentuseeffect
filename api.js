const apiKey = 'dee8c37b0604d1e81088289b25ad28c3';

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.cod !== 200) {
            throw new Error(data.message || 'Error fetching weather data');
        }
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}


export default getWeather;
