const sub = document.querySelector(".form-btn");
const buy = document.querySelector(".product-descriptions-top-btn-item");
sub.addEventListener("click", (e) => {
  e.preventDefault();
  createThanks();
});
buy.addEventListener("click", () => {
  const spanBack = document.createElement("div");
  const modalBlock = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");
  const toCart = document.createElement("a");
  const toCatalog = document.createElement("a");
  const remove = document.createElement("span");
  modalBlock.className = "modal modal__active modal__product";
  img.className = "modal__img";
  img.src = "assets/img/doneicon.png";
  text.className = "title";
  toCart.href = "./cart.html";
  toCatalog.href = "./catalog.html";
  toCatalog.className = "toCatalog";
  remove.className = "remove";
  document.body.append(modalBlock);
  document.body.append(spanBack);
  modalBlock.append(img);
  modalBlock.append(text);
  modalBlock.append(toCart);
  modalBlock.append(toCatalog);
  modalBlock.append(remove);
  toCart.append("перейти в корзину");
  toCatalog.append("вернуться в каталог");
  remove.append("x");
  toCart.className = "btn";
  text.append("Товар добавлен в корзину");
  spanBack.classList.toggle("background__white");
  spanBack.addEventListener("click", () => {
    spanBack.classList.toggle("background__white");
    modalBlock.remove();
  });
  remove.addEventListener("click", () => {
    spanBack.classList.toggle("background__white");
    modalBlock.remove();
  });
});
