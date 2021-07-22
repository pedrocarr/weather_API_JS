document.querySelector('.busca').addEventListener('submit', async (event) => {
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;

  if (input !== '') {
    showWarning('Loading...');
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=df2424834f1e3d997a4510df1958d30b&units=metric&lang=en`

  let results = await fetch(url);
  let json = await results.json();

  if (json.cod === 200) {
    showInfo({
      name : json.name,
      country: json.sys.country,
      temp: json.main.temp,
      tempIcon: json.weather[0].icon,
      windSpeed: json.wind.speed,
      windAngle: json.wind.deg
    });
  } else {
    showWarning('We did not find this location.');
  }


});

function showInfo(json) {
  showWarning('');

  document.querySelector('.resultado').style.display = 'block';
  document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country};`
}

function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}