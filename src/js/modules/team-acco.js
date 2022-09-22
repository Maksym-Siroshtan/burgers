export function teamAcco() {
  const teamAccordions = document.querySelectorAll(".team__item");

  for (let item of teamAccordions) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.classList.contains("team__item--active")) {
        this.classList.remove("team__item--active");
      } else {
        for (let el of teamAccordions) {
          el.classList.remove("team__item--active");
        }
        this.classList.add("team__item--active");
      }
    });
  }
}
