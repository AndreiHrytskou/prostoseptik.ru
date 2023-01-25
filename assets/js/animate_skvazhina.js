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
let topBlock = blockImage.getBoundingClientRect().top;
let bottomBlock = blockImage.getBoundingClientRect().bottom;
let topBlockSecond = blockImageSecond.getBoundingClientRect().top;
let bottomBlockSecond = blockImageSecond.getBoundingClientRect().bottom;
// let topBlock1 = topBlock;
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1200) {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      if (scrollY > topBlock - 100 && scrollY < bottomBlock) {
        scrollFirst();
        blockImage.classList.add("fixed");
      } else {
        blockImage.classList.remove("fixed");
      }
      if (scrollY > topBlockSecond - 100 && scrollY < bottomBlockSecond) {
        scrollSecond();
        blockImageSecond.classList.add("fixed2");
      } else {
        blockImageSecond.classList.remove("fixed2");
      }
    });
    function scrollFirst() {
      let body = window.document.body.offsetWidth;
      let wrap = document.querySelector(".textblock-wrap").offsetWidth;
      let sum = (body - wrap) / 2;
      let sum2 = wrap - blockImage.offsetWidth;
      blockImage.style.left = sum + sum2 - 50 + "px";
    }
    function scrollSecond() {
      let body = window.document.body.offsetWidth;
      let wrap = document.querySelector(".textblock-wrap").offsetWidth;
      let sum = (body - wrap) / 2;
      blockImageSecond.style.left = sum + 50 + "px";
    }
  }
});
