if (document.querySelector(".consultant__btn") != undefined) {
  const formBtn1 = document.querySelector(".consultant__btn");
  formBtn1.addEventListener("click", (e) => {
    e.preventDefault();
    createThanks();
  });
}
const formBtn2 = document.querySelector(".form-button");
formBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  createThanks();
});
