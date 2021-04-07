import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();

  const burger = document.getElementById("burger");

  burger.addEventListener("click", ()=> {
      if(burger.classList.contains("toggle-on")){
        burger.classList.remove("toggle-on") 
        burger.classList.add("toggle-off") 
      } else {
        burger.classList.remove("toggle-off") 
        burger.classList.add("toggle-on") 
      }
  });
 
  


