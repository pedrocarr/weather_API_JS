document.querySelector('.busca').addEventListener('submit', (event)=>{
  event.preventDefault();

  let input = document.querySelector('#searchInput').ariaValueMax;

  if(input !== '') {
    showWarning('Loading...')
  }

  let url = `api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=df2424834f1e3d997a4510df1958d30b`


} );


function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}