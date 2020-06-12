const ipad = window.matchMedia('screen and (max-width: 767px)');
const $menu = document.querySelector('.menu');
const $burguerButton = document.querySelector('#burguer-button');

ipad.addListener(validation);

function validation(event) {
  if(event.matches) {
    $burguerButton.addEventListener('click', hideShow);
  } else {
    $burguerButton.removeEventListener('click', hideShow);  
  }
}

validation(ipad);

function hideShow() {
  $menu.classList.toggle('is-active');  
}
