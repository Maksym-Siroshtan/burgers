const reviewsOverlay = document.querySelector('#reviewsOverlay');
const reviewsClose = document.querySelector('#reviews__overlay-close');

document.querySelectorAll('#reviews-button').forEach(function(reviewsOpen) {
    reviewsOpen.addEventListener('click', function(e) {
        reviewsOverlay.style.display = 'block';
    })

    reviewsClose.addEventListener('click', function(e) {
        e.preventDefault();
        reviewsOverlay.style.display = 'none';
    })
})