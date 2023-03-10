const API_KEY = "c94525ce5f771722788456ca9dc6684a"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(`you live it ${lat}, ${lon}`);
  fetch(url).then(response => response.json()).then(tomato =>{
    const weather = document.querySelector('#weather > span:first-child');
    const city = document.querySelector('#weather > span:last-child');
    weather.innerText = `${tomato.weather[0].main} / ${tomato.main.temp}℃`;
    city.innerText = tomato.name;
  });
}
function onGeoError(){
  alert('can`t find you. No weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);