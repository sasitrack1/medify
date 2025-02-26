# Weather App

## Project Overview
This project is a simple weather application that fetches and displays weather data for a user-specified city using the OpenWeatherMap API. The application consists of three separate files:

- `index.html` - HTML structure
- `style.css` - Styling for UI/UX
- `script.js` - JavaScript logic for fetching and displaying weather data

## API Used
**API Provider:** OpenWeatherMap  
**Endpoint:** `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`  
**Purpose:** Retrieves current weather data, including temperature, humidity, and weather description.  
**Reason for Choosing:** OpenWeatherMap provides free access to real-time weather data with a simple API integration.

## Features
- Fetches real-time weather data based on user input.
- Displays temperature, humidity, and weather conditions.
- Uses an attractive and responsive UI.
- Error handling for invalid city names and network issues.

## How to Run the Project
1. Clone the repository or download the files.
2. Open `index.html` in a browser.
3. Enter a city name in the input field and click the "Get Weather" button.
4. The weather details will be displayed.

## Testing the Implementation
### Basic Tests
- Open `index.html` in a browser.
- Enter a valid city name and check if the correct weather details are displayed.

### Error Handling Tests
- Try entering an invalid city name (e.g., "Dharmapuri") and verify that an error message appears.
- Disconnect from the internet and check how the app handles network errors.

## Enhancements & Future Improvements
- Add icons representing different weather conditions.
- Improve UI/UX with animations and better layout.
- Enable location-based weather retrieval using the Geolocation API.
- Show additional data like air pressure and wind speed.
- Store the last searched city using local storage.

## Conclusion
This project successfully fetches and displays weather data using the OpenWeatherMap API. The implementation follows best practices for clean code, error handling, and responsive design.

## License
This project is open-source and free to use under the MIT License.

---
### Author
Developed by **[SASIKUMAR R]**

