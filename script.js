async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8621a3f44413dc184e7aa3e17becac09';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(data.cod === 200){
            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p> `;

            document.getElementById('weatherResult').innerHTML = weatherInfo;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
        }
    } catch {
        document.getElementById('weatherResult').innerHTML = `<p>Error. Please try again.</p>`;
    }
}