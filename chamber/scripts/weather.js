const apiKey = "7ddbac12850563d83e797f9e34c4d949";
const lat = 25.6866;
const lon = -100.3161;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  if (currentTemp) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
  }
  
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  
  if (weatherIcon) {
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  }
  
  if (weatherDesc) {
    weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
  }
}