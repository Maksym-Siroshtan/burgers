export function menuAcco() {
  const menuAccordions = document.querySelectorAll(".menu__item");

  for (let item of menuAccordions) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.classList.contains("menu__item--active")) {
        this.classList.remove("menu__item--active");
      } else {
        for (let el of menuAccordions) {
          el.classList.remove("menu__item--active");
        }
        this.classList.add("menu__item--active");
      }
    });
  }
}
