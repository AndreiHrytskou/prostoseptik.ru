let arrProd = document.querySelectorAll(".product");
const btn = document.querySelector(".more-btn");
let card = document.querySelectorAll(".card-btn");
let amountProduct = document.querySelectorAll(".cart_item");
let amountProd = [];
// let newAmount = (amountProd = 6);
arrProd.forEach((el) => {
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
btn.addEventListener("click", (e) => {
  e.preventDefault();
  amountProd.forEach((elem) => {
    elem.style.display = "flex";
    btn.style.display = "none";
  });
  localStorage.setItem("number", amountProduct.length);
});

//sidebar show
const sidebar = document.querySelector(".sidebar");
const showSidebar = document.querySelector(".sidebar-hide");
const showForm = document.querySelector(".sidebar__form");
showSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-show");
});
let listProd = {};
card.forEach((e) => {
  e.addEventListener("click", (elem) => {
    elem.preventDefault();
    e.style.zIndex = "-1";
  });
});
document.addEventListener("click", (e) => {
  e.stopPropagation();
  let target = e.target;
  let its_menu = target == showSidebar || showSidebar.contains(target);
  let its_showForm = target == showForm || showForm.contains(target);
  if (!its_menu && !its_showForm) {
    sidebar.classList.remove("sidebar-show");
    //  filtrImg.classList.remove("sidebar-show");
  }
});
//  orderby
const orderby = document.querySelector(".orderby");
const filtr = document.querySelector(".filtr");
const filtrItem = document.querySelector(".filtr__item");
const filtrImg = document.querySelector(".filtr__img");
let orderbyItem = document.querySelectorAll(".orderby__item");
if (filtr != undefined) {
  filtr.addEventListener("click", () => {
    orderby.classList.toggle("orderby__active");
    filtrImg.classList.toggle("filtr__img-active");
    orderbyItem.forEach((e) => {
      e.addEventListener("click", () => {
        filtrItem.innerText = e.innerText;
      });
    });
  });

  document.addEventListener("click", (e) => {
    e.stopPropagation();
    let target = e.target;
    let its_menu = target == filtr || filtr.contains(target);
    if (!its_menu) {
      orderby.classList.remove("orderby__active");
      filtrImg.classList.remove("filtr__img-active");
    }
  });
}
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
