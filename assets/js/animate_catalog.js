let card = document.querySelectorAll(".card-btn");
card.forEach((e) => {
  e.addEventListener("click", (elem) => {
    elem.preventDefault();
    e.style.zIndex = "-1";
  });
});
if (window.innerWidth > 1025) {
  let catalog = document.querySelectorAll(".product");
  const prodImg = document.querySelectorAll(".product-img");
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

  const manufacturer = document.querySelector(".manufacturer__block");
  const select = document.querySelector(".manufacturer-select");
  manufacturer.addEventListener("click", () => {
    manufacturer.classList.toggle("manufacturer__active");
    select.classList.toggle("select__active");
  });
  document.addEventListener("click", (e) => {
    e.stopPropagation();
    let target = e.target;
    let its_menu = target == manufacturer || manufacturer.contains(target);
    let its_select = target == select || select.contains(target);
    if (!its_menu && !its_select) {
      manufacturer.classList.remove("manufacturer__active");
      select.classList.remove("select__active");
    }
  });

  let amountProduct = document.querySelectorAll(".cart_item");
  let amountProd = [];
  catalog.forEach((el) => {
    amountProd.push(el);
    return amountProd;
  });
  amountProd.forEach((el) => {
    el.style.display = "none";
  });
  let newArr = amountProd.slice(0, 6);
  newArr.forEach((e) => {
    e.style.display = "flex";
  });

  //sidebar show
}
const sidebar = document.querySelector(".sidebar");
const showSidebar = document.querySelector(".sidebar-hide");
const showForm = document.querySelector(".sidebar__form");
showSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-show");
});
let listProd = {};

document.addEventListener("click", (e) => {
  e.stopPropagation();
  let target = e.target;
  let its_menu = target == showSidebar || showSidebar.contains(target);
  let its_showForm = target == showForm || showForm.contains(target);
  if (!its_menu && !its_showForm) {
    sidebar.classList.remove("sidebar-show");
  }
});
