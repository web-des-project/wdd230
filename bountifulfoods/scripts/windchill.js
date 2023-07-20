const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('figcaption');
const speedValue = document.querySelector('#speed');


const url = 'http://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=b761ba3a9e675f71756b2223c8911b34'

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

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  speedValue.innerHTML = `${weatherData.wind.speed.toFixed(1)} m/s`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;

  

   weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt', desc);
   weatherDescription.textContent = desc;
  
  const temp = parseInt(currentTemp.textContent);
  const speed = parseFloat(speedValue.textContent);

  const temperatureF = Math.round(temp * (9/5) + 32);


  function buildWChill(temperatureF, speed) {
    if ((temperatureF <= 50) & (speed > 3)) {
        const windChillF = Math.round(35.74 + 0.6215 * temperatureF - 35.75 * speed ** 0.16 + 0.4275 * temperatureF * speed ** 0.16);
        const windChillC = Math.round(((windChillF - 32) * 5) / 9);
        return windChillC;
    } else {
        return 'N/A';
    }
    }

  document.querySelector('#wind-chill').innerHTML = buildWChill(temperatureF, speed);
}
