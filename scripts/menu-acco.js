/*document.querySelectorAll('.menu__item').forEach(function(section) {
    section.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.menu__item').forEach(function(section) {
         section.classList.remove('menu__item--active')
        })

    e.target.closest('.menu__item').classList.add('menu__item--active')
    })
})*/

document.querySelectorAll('.menu__item').forEach(function(section) {
    section.addEventListener('click', function(e) {
    e.preventDefault();
    section.classList.toggle('menu__item--active')
    })
})