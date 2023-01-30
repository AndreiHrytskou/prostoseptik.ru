let btnForm = document.querySelectorAll(".baner-btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".button-close");
const button = document.querySelector(".button");
const btn2 = document.querySelector(".block2-bottom-btn");
const input = document.querySelector(".input-checkbox");
const div = document.createElement("div");
const formOrder = document.querySelector(".form-order");
div.addEventListener("click", () => {
  div.classList.toggle("div-hide");
});
input.addEventListener("click", () => {
  button.toggleAttribute("disabled");
});
btnForm.forEach((e) => {
  e.addEventListener("click", () => {
    modal.classList.toggle("modal__active");
    div.classList.toggle("div-hide");
    //  document.body.classList.toggle("overflow");
    document.body.append(div);
    div.addEventListener("click", () => {
      modal.classList.remove("modal__active");
      div.classList.remove("div-hide");
      // document.body.classList.remove("overflow");
    });
    close.addEventListener("click", () => {
      modal.classList.remove("modal__active");
      div.classList.remove("div-hide");
      // document.body.classList.remove("overflow");
    });
  });
});
//

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (modal.classList.contains("modal__active")) {
    modal.classList.toggle("modal__active");
  }
  createThanks();
});
