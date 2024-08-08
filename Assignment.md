# React Hooks and API Handling Quiz

## Multiple Choice Questions (2 points each)

1. What is the primary purpose of the useState hook in React?
   a) To perform side effects
   b) To manage state in functional components
   c) To create class components
   d) To handle API calls

2. In the following code snippet, what does setCount do?
   ```javascript
   const [count, setCount] = useState(0);
   ``` 
   a) It initializes the count state
   b) It returns the current count value
   c) It's a function to update the count state
   d) It's a class method

3. What is the purpose of the empty dependency array [] in useEffect?
   a) It means the effect will run on every render
   b) It means the effect will never run
   c) It means the effect will only run once, after the initial render
   d) It's a syntax error

4. Which of the following is TRUE about useEffect?
   a) It can only be used for API calls
   b) It replaces lifecycle methods in class components
   c) It can only be used once per component
   d) It must always return a cleanup function

5. In the context of the MovieGrid component, why is useState used to store the movies?
   a) To make the API call
   b) To render the movie grid
   c) To store and update the movie data, triggering re-renders when it changes
   d) To create a class component

## Code Analysis (5 points)

Examine the following code snippet:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.example.com/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

Explain how useState and useEffect are used in this component. What would happen if the userId prop changes? How does this component handle loading states and errors?

## Coding Challenge (10 points)
openweathermap.org

Create a React component called `WeatherWidget` that fetches and displays the current weather for a given city. Use the OpenWeatherMap API (or any weather API of your choice). The component should:

1. Use useState to manage the weather data and loading state.
2. Use useEffect to fetch weather data when the component mounts and when the city changes.
3. Display loading state while fetching data.
4. Handle and display any errors that occur during the API call.
5. Display the temperature, weather description, and an icon representing the weather condition.

Bonus: Add a simple form that allows users to change the city, and ensure the weather data updates accordingly.
 
Note: This should the JSX.
```
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
      {weather && (
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
```
