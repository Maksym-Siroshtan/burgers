const menuAccordions = document.querySelectorAll('.menu__item');

for (item of menuAccordions) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        if(this.classList.contains('menu__item--active')) {
            this.classList.remove('menu__item--active');
            
        } else {

            for(el of menuAccordions) {
                el.classList.remove('menu__item--active');
            }
            this.classList.add('menu__item--active');
        }
    });
}