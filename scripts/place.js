const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `©️ ${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;

const lastModified = document.querySelector("#lastModified");
let modification = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${modification.toLocaleString()}`;

const windSpeed = 6;
const temperatureToday = 22;
const conditionToday = "Cloudy";
const humidityToday = 79;
const windChillToday = calculateWindChill();
const windchill = document.querySelector("#windchill");
const condition = document.querySelector("#condition");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
temperature.innerHTML = `<strong>Temperature:</strong> ${temperatureToday}℉`;
condition.innerHTML = `<strong>Condition:</strong> ${conditionToday}`;
humidity.innerHTML = `<strong>Humidity:</strong> ${humidityToday}%`;
wind.innerHTML = `<strong>Wind Speed:</strong> ${windSpeed} mph`;
windchill.innerHTML = `<strong>Wind Chill:</strong> ${windChillToday.toFixed(1)}℉`;




function calculateWindChill() {
  return 35.74 + 0.6215 * temperatureToday - 35.75 * windSpeed**0.16 + 0.4275 * temperatureToday * windSpeed**0.16;
}