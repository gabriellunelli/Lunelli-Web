const images = [
  "images/inicio.png",
  "images/agendamento.png",
  "images/portfolio.png",
  "images/localizacao.png"
];

let index = 0;

function showImage(){ document.getElementById('carousel-img').src = images[index]; }
function nextImage(){ index=(index+1)%images.length; showImage(); }
function prevImage(){ index=(index-1+images.length)%images.length; showImage(); }

window.addEventListener('DOMContentLoaded', showImage);

function toggleTheme(el){
  document.body.classList.toggle('light');
  if (el) {
    el.textContent = document.body.classList.contains('light') ? '☼' : '☾';
  }
}

function toggleMenu(){
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}