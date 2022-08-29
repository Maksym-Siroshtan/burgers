const teamAccordions = document.querySelectorAll('.team__item');

for (item of teamAccordions) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        if(this.classList.contains('team__item--active')) {
            this.classList.remove('team__item--active');

        } else {

            for(el of teamAccordions) {
                el.classList.remove('team__item--active');
            }
            this.classList.add('team__item--active');
        }
    });
}