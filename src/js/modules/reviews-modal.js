export function reviewsModal() {
  const reviewsOverlay = document.querySelector("#reviewsOverlay");
  const reviewsClose = document.querySelector("#reviews__overlay-close");

  document.querySelectorAll("#reviews-button").forEach(function (reviewsOpen) {
    let paddingOfSetReviews =
      window.innerWidth - document.body.offsetWidth + "px";

    reviewsOpen.addEventListener("click", function (e) {
      reviewsOverlay.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = paddingOfSetReviews;
    });

    reviewsClose.addEventListener("click", function (e) {
      e.preventDefault();
      reviewsOverlay.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0;
    });
  });
}
