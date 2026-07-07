const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const loc = document.getElementById("location")

const API_KEY = "81a0b28f7901f8681fc938ae119422d4";
const city = "Jaipur";

export async function weatherInfo(){
const res = await fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
)
const data = await res.json()

tempEl.textContent = `${Math.round(data.main.temp)}°C`;

 conditionEl.textContent = data.weather[0].description;

 humidityEl.textContent =`Humidity: ${data.main.humidity}%`;

windEl.textContent =`Wind: ${data.wind.speed} km/h`;
loc.textContent = `${city}(${data.sys.country})`
}