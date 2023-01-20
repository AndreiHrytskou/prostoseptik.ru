let catalog = document.querySelectorAll(".product");
let card = document.querySelectorAll(".card-btn");
catalog.forEach((e) => {
  let btn = e.childNodes[3].childNodes[5];
  btn.addEventListener("click", () => {
    function getCoords() {
      let cart = document.querySelector(".header__menu-cart");
      let img = e.childNodes[1];
      let image = e.childNodes[1].childNodes[1].cloneNode();
      image.style.position = "absolute";
      image.style.top = img.offsetTop + "px";
      image.style.left = img.offsetLeft + "px";
      image.style.zIndex = 999999;
      image.style.width = "281px";
      let top = cart.offsetTop;
      let left = cart.offsetLeft + "px";
      let finishTop = window.pageYOffset - top - 50 + "px";
      document.body.appendChild(image);
      image.animate(
        [
          {
            top: finishTop,
            left: left,
            transform: "scale(0.2)",
          },
        ],
        {
          duration: 800,
        }
      );
      setTimeout(remImg, 800);
      function remImg() {
        image.remove();
      }
    }
    getCoords();
  });
});
card.forEach((e) => {
  e.addEventListener("click", (elem) => {
    elem.preventDefault();
    e.style.zIndex = "-1";
  });
});
