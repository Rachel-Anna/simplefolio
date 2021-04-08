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
  const expandedNav = document.getElementById("nav-menu")
  const expandedMenu = document.getElementById("expanded-menu");


  burger.addEventListener("click", ()=> {
      if(burger.classList.contains("toggle-on")){
        burger.classList.remove("toggle-on") 
        burger.classList.add("toggle-off") 
        expandedNav.style.animation = `nav-expansion-reverse 0.3s ease forwards`
      } else {
        burger.classList.remove("toggle-off") 
        burger.classList.add("toggle-on") 
        expandedNav.style.animation = `nav-expansion 1s ease forwards`;
      };
      }
  );
 



