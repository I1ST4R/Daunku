
const nav = document.querySelector('.header__nav-container2');
const menu = document.getElementById('header__menu');

document.addEventListener("click", function(e){
  if (window.innerWidth <= 600){
    
    if(e.target.closest("#header__menu")){
      nav.style.transform = "scale(1)";
      menu.style.transform = "scale(0)";
    } 

    else{
      nav.style.transform = "scale(0)";
      menu.style.transform = "scale(1)";
    } 

  }

})