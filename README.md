# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# weatherApp_React


Useful links:
- API documentation https://openweathermap.org/api
- API call: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

Project Reqs:
- This program used the useState hook to manage the state for latitude, longitude, weather data, and error messages.
- The useEffect hook was used to fetch weather data whenever the search, lat, or lon state variables change

- Endpoints: Weather by City Name: https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API key}

Weather by Latitude and Longitude: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API key}
