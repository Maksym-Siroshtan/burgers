const burgerMenuOpen = document.querySelector('#burger-menu-link');
const burgerPopUpOpen = document.querySelector('#burger__pop-up');
const burgerPopUpClose = document.querySelector('#burger__pop-up-close');

document.addEventListener("DOMContentLoaded", function(event) { 
    burgerMenuOpen.addEventListener('click', function(event) {
        burgerPopUpOpen.style.display = 'flex';
    });
    
    burgerPopUpClose.addEventListener('click', function(event) {
        burgerPopUpOpen.style.display = 'none';
    });
    
  });