const productBox = document.querySelectorAll(".product");
productBox.forEach((element) => {
  let btnBuy = element.childNodes[3].childNodes[5];
  btnBuy.addEventListener("click", () => {
    getCoords();
  });
});
function getCoords() {
  let cart = document.querySelector(".header__menu-cart");
  let imgDef = element.childNodes[1].childNodes[1];
  console.log(imgDef);
  let image = element.childNodes[1].childNodes[1].cloneNode();
  image.style.position = "absolute";
  image.style.zIndex = "99";
  image.style.width = "284px";
  image.style.left = imgDef.offsetLeft + "px";
  image.style.top = imgDef.offsetTop + "px";
  console.log(image.style.left);
  console.log(cart.offsetTop);
  document.querySelector("main").append(image);
  image.animate(
    [
      { top: cart.offsetTop + "px" },
      { left: cart.offsetLeft + "px" },
      { transform: "scale(0.5)" },
      { opacity: 0 },
    ],
    {
      duration: 1000,
    }
  );
}
