export function slider() {
  const prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    slides = document.querySelectorAll(".slider__item"),
    dots = document.querySelectorAll(".dot");

  let index = 0;

  const activeSlide = (n) => {
    for (let slide of slides) {
      slide.classList.remove("slider__item--active");
    }
    slides[n].classList.add("slider__item--active");
  };

  const nextSlide = (e) => {
    e.preventDefault();
    if (index == slides.length - 1) {
      index = 0;
      activeSlide(index);
    } else {
      index++;
      activeSlide(index);
    }
  };

  const prevSlide = (e) => {
    e.preventDefault();
    if (index == 0) {
      index = slides.length - 1;
      activeSlide(index);
    } else {
      index--;
      activeSlide(index);
    }
  };

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
}
