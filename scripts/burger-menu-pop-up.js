document.addEventListener("DOMContentLoaded", function(e) {
    const burgerMenuOpen = document.querySelector('#burger-menu-link');
    const burgerPopUpOpen = document.querySelector('#burger__pop-up');
    const burgerPopUpClose = document.querySelector('#burger__pop-up-close');

    burgerMenuOpen.addEventListener('click', function(e) {
        burgerPopUpOpen.style.display = 'flex';
    });
    
    burgerPopUpClose.addEventListener('click', function(e) {
        burgerPopUpOpen.style.display = 'none';
    });
    
  });