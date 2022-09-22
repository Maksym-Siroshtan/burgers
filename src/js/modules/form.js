export function form() {
  const myForm = document.querySelector("#myForm");
  const orderButton = document.querySelector("#order");
  const formOverlay = document.querySelector("#formOverlay");
  const formOverlayClose = document.querySelector("#formOverlayClose");
  const formOverlayText = document.querySelector("#formOverlayText");
  const phone = document.querySelector("#phone");

  phone.addEventListener("keydown", function (event) {
    let iSDigit = false;
    let isSymbols = false;
    let isControl = false;

    if (event.key >= 0 || event.key <= 9) {
      iSDigit = true;
    }

    if (
      event.key == "-" ||
      event.key == "+" ||
      event.key == "(" ||
      event.key == ")"
    ) {
      isSymbols = true;
    }

    if (
      event.key == "ArrowLeft" ||
      event.key == "ArrowRight" ||
      event.key == "Backspace"
    ) {
      isControl = true;
    }

    if (!iSDigit && !isSymbols && !isControl) {
      event.preventDefault();
    }
  });

  orderButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (validateForm(myForm)) {
      const data = {
        name: myForm.elements.name.value,
        phone: myForm.elements.phone.value,
        street: myForm.elements.street.value,
        house: myForm.elements.house.value,
        frame: myForm.elements.frame.value,
        flat: myForm.elements.flat.value,
        floor: myForm.elements.floor.value,
        comment: myForm.elements.comment.value,
        callback: myForm.elements.callback.checked,
      };

      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", "https://eorosyhq4rx8nnx.m.pipedream.net");
      xhr.send(JSON.stringify(data));
      xhr.addEventListener("load", () => {
        let paddingOfSetForm =
          window.innerWidth - document.body.offsetWidth + "px";
        document.body.style.paddingRight = paddingOfSetForm;
        document.getElementById("myForm").reset();

        if (xhr.status >= 400) {
          formOverlay.style.display = "block";
          formOverlayText.textContent = "Отправить сообщение не удалось";
          formOverlayText.style.color = "red";
          document.body.style.overflow = "hidden";
        } else {
          formOverlay.style.display = "block";
          document.body.style.overflow = "hidden";
        }
        formOverlayClose.addEventListener("click", () => {
          formOverlay.style.display = "none";
          document.body.style.overflow = "";
          document.body.style.paddingRight = 0;
        });
      });
    }

    function validateForm(form) {
      let valid = true;

      if (!validateField(form.elements.name)) {
        valid = false;
      }

      if (!validateField(form.elements.phone)) {
        valid = false;
      }

      if (!validateField(form.elements.street)) {
        valid = false;
      }

      if (!validateField(form.elements.house)) {
        valid = false;
      }
      return valid;
    }

    function validateField(field) {
      if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;

        return false;
      } else {
        field.nextElementSibling.textContent = "";

        return true;
      }
    }
  });
}
