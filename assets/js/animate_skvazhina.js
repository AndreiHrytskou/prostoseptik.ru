// const blockImage = document.querySelectorAll("");
const blockImage = document.querySelector(
  ".textblock-wrap-container:first-child .textblock-wrap-container-list"
);
const blockImageSecond = document.querySelector(
  ".textblock-wrap-container:nth-child(2) .textblock-wrap-container-list"
);
const blockHeight = document.querySelector(
  ".textblock-wrap-container:first-child"
);
const blockHeightSecond = document.querySelector(
  ".textblock-wrap-container:nth-child(2)"
);
let topBlock = blockHeight.getBoundingClientRect().top;
let bottomBlock = blockHeight.getBoundingClientRect().bottom;
// let topBlock1 = topBlock;

window.addEventListener("scroll", scrollFirst);
window.addEventListener("scroll", () => {
  if (window.pageYOffset > bottomBlock) {
    window.removeEventListener("scroll", scrollFirst);
  }
});

window.addEventListener("scroll", scrollSecond);
function scrollFirst() {
  if (window.pageYOffset > blockImage.offsetTop - 70) {
    let body = window.document.body.offsetWidth;
    let wrap = document.querySelector(".textblock-wrap").offsetWidth;
    let sum = (body - wrap) / 2;
    let sum2 = wrap - blockImage.offsetWidth;
    blockImage.style.position = "fixed";
    blockImage.style.top = "60px";
    blockImage.style.left = sum + sum2 - 50 + "px";
  }
}
function scrollSecond() {
  if (window.pageYOffset > blockImageSecond.offsetTop - 80) {
    let body = window.document.body.offsetWidth;
    let wrap = document.querySelector(".textblock-wrap").offsetWidth;
    let sum = (body - wrap) / 2;
    blockImageSecond.style.position = "fixed";
    blockImageSecond.style.top = "90px";
    blockImageSecond.style.left = sum + 50 + "px";
  }
}
