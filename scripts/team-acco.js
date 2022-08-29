document.querySelectorAll('.team__item').forEach(function(section) {
    section.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.team__item').forEach(function(section) {
            section.classList.remove('team__item--active')
        })

        e.target.closest('.team__item').classList.add('team__item--active')
    })
})