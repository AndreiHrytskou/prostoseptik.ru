window.onload = function () {
  slideOne();
  slideTwo();
  slideThree();
  slideFour();
  slideFive();
  slideSix();
};
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
//

let slider3 = document.getElementById("slider-3");
let slider4 = document.getElementById("slider-4");
let displayVal3 = document.getElementById("range3");
let displayVal4 = document.getElementById("range4");
let minGap2 = 0;
let sliderTrack2 = document.querySelector(".slider-track2");
let sliderMaxValue2 = document.getElementById("slider-3").max;
function slideThree() {
  if (parseInt(slider4.value) - parseInt(slider3.value) <= minGap2) {
    slider3.value = parseInt(slider4.value) - minGap2;
  }
  displayVal3.textContent = slider3.value;
  fillColor2();
}
function slideFour() {
  if (parseInt(slider4.value) - parseInt(slider3.value) <= minGap2) {
    slider4.value = parseInt(slider3.value) + minGap2;
  }
  displayVal4.textContent = slider4.value;
  fillColor2();
}
function fillColor2() {
  percent3 = (slider3.value / sliderMaxValue2) * 100;
  percent4 = (slider4.value / sliderMaxValue2) * 100;
  sliderTrack2.style.background = `linear-gradient(to right, #dadae5 ${percent3}% , #3264fe ${percent3}% , #3264fe ${percent4}%, #dadae5 ${percent4}%)`;
}

let slider5 = document.getElementById("slider-5");
let slider6 = document.getElementById("slider-6");
let displayVal5 = document.getElementById("range5");
let displayVal6 = document.getElementById("range6");
let minGap3 = 0;
let sliderTrack3 = document.querySelector(".slider-track3");
let sliderMaxValue3 = document.getElementById("slider-5").max;
function slideFive() {
  if (parseInt(slider6.value) - parseInt(slider5.value) <= minGap3) {
    slider5.value = parseInt(slider6.value) - minGap3;
  }
  displayVal5.textContent = slider5.value;
  fillColor3();
}
function slideSix() {
  if (parseInt(slider6.value) - parseInt(slider5.value) <= minGap3) {
    slider6.value = parseInt(slider5.value) + minGap3;
  }
  displayVal6.textContent = slider6.value;
  fillColor3();
}
function fillColor3() {
  percent5 = (slider5.value / sliderMaxValue3) * 100;
  percent6 = (slider6.value / sliderMaxValue3) * 100;
  sliderTrack3.style.background = `linear-gradient(to right, #dadae5 ${percent5}% , #3264fe ${percent5}% , #3264fe ${percent6}%, #dadae5 ${percent6}%)`;
}
//sidebar show
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
let catalog = document.querySelectorAll(".product");
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
const hide = document.querySelector(".hide");
const hide2 = document.querySelector(".hide2");
const textHide = document.querySelectorAll(".text-hide");
hide.addEventListener("click", () => {
  hide.style.display = "none";
  hide2.style.display = "block";
  textHide.forEach((e) => {
    e.classList.remove("text-hide");
  });
});
hide2.addEventListener("click", () => {
  hide.style.display = "block";
  hide2.style.display = "none";
  textHide.forEach((e) => {
    e.classList.add("text-hide");
  });
});

const moreBtn = document.querySelector(".more__btn");
const textMore = document.querySelectorAll(".text-more");
const hideBtn = document.querySelector(".hide__btn");
moreBtn.addEventListener("click", () => {
  moreBtn.style.display = "none";
  hideBtn.style.display = "block";
  textMore.forEach((e) => {
    e.classList.remove("text-more");
  });
});
hideBtn.addEventListener("click", () => {
  moreBtn.style.display = "block";
  hideBtn.style.display = "none";
  textMore.forEach((e) => {
    e.classList.add("text-more");
  });
});
