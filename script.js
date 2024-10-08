async function getWeather() {
	const city = document.getElementById("cityInput").value;
	const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		const weatherInfo = document.getElementById("weatherInfo");
		weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} &deg;C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
	} catch (error) {
		console.log("Error fetching weather data: ", error);
		const weatherInfo = document.getElementById("weatherInfo");
		weatherInfo.innerHTML =
			"<p>Failed to fetch weather data. Please try again later.</p>";
	}
}