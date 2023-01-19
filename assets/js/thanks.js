function createThanks() {
  const thanks = document.createElement("div");
  const thanksTitle = document.createElement("p");
  const thanksText = document.createElement("p");
  const thanksBtn = document.createElement("button");
  thanks.className = "thanks";
  thanksTitle.className = "title center";
  thanksText.className = "modal-text";
  thanksBtn.className = "mobal__btn";
  document.body.append(thanks);
  thanks.append(thanksTitle);
  thanks.append(thanksText);
  thanks.append(thanksBtn);
  thanksTitle.append("Спасибо!");
  thanksText.append("В ближайшее время с Вами свяжутся наши сотрудники");
  thanksBtn.append("Продолжить");
  thanksBtn.addEventListener("click", () => {
    thanks.remove();
    div.classList.toggle("div-hide");
  });
  div.addEventListener("click", () => {
    thanks.remove();
  });
}
