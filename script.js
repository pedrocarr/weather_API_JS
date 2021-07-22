document.querySelector('.busca').addEventListener('submit', (event)=>{
  event.preventDefault();

  let input = document.querySelector('#searchInput').ariaValueMax;

  if(input !== '') {
    showWarning('Loading...')
  }



} );


function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}