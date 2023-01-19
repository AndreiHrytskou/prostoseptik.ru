const inputChecked = document.querySelector("#consent");
const inputBtn = document.querySelector(".form-btn");

inputChecked.addEventListener("click", () => {
  inputBtn.toggleAttribute("disabled");
});
inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createThanks();
});
function createThanks() {
  const div = document.createElement("div");
  const thanks = document.createElement("div");
  const thanksTitle = document.createElement("p");
  const thanksText = document.createElement("p");
  const thanksBtn = document.createElement("button");
  div.classList.toggle("div-hide");
  thanks.className = "thanks";
  thanksTitle.className = "title center";
  thanksText.className = "modal-text";
  thanksBtn.className = "mobal__btn";
  document.body.append(thanks);
  document.body.append(div);
  thanks.append(thanksTitle);
  thanks.append(thanksText);
  thanks.append(thanksBtn);
  thanksTitle.append("Спасибо за Ваше обращение!");
  thanksText.append("В течение дня мы с Вами свяжемся");
  thanksBtn.append("Продолжить");
  thanksBtn.addEventListener("click", () => {
    thanks.remove();
    div.remove();
  });
  div.addEventListener("click", () => {
    thanks.remove();
    div.classList.toggle("div-hide");
  });
}
