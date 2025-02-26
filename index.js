async function getWeather() {
    const apiKey = "01ccc6c21c0ff2718e8bcaa1034ba564";
    const city = document.getElementById("city").value.trim(); // Trim spaces

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const weatherDiv = document.getElementById("weather");
    weatherDiv.innerHTML = "<p>Loading... ⏳</p>"; // Show loading text

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found!");

        const data = await response.json();

        weatherDiv.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature 🌡️: ${data.main.temp}°C</p>
            <p>Weather 🌦️: ${data.weather[0].description}</p>
            <p>Humidity 💧: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherDiv.innerHTML = "<p style='color: red;'>Error: City not found or network issue!</p>";
    }
}
