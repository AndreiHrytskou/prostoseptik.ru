// window.addEventListener("load", () => {
setTimeout(loadBlock, 800);
function loadBlock() {
  let block = document.querySelectorAll(".block-bottom-item");
  block.forEach((e) => {
    e.style.transform = "scale(1)";
    e.style.transition = "0.5s";
  });
}
// });

const review = document.querySelector(".review");
window.addEventListener("scroll", () => {
  review.getBoundingClientRect();
  if (window.pageYOffset > review.offsetTop - 500) {
    review.style.transform = "translateX(0)";
    review.style.transition = "0.5s";
  }
});
const blockHover = document.querySelectorAll(".block2-middle-item");
if (window.innerWidth < 1025) {
  blockHover.forEach((e) => {
    e.addEventListener("focus", () => {
      e.classList.toggle("block__hide_active");
    });
  });
}
const blockMiddle = document.querySelector(".block2-middle");
const topBlock2 = blockMiddle.getBoundingClientRect().top;
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > topBlock2 - 130) {
    blockMiddle.classList.add("animate");
  }
});

let card = document.querySelectorAll(".card-btn");
card.forEach((e) => {
  e.addEventListener("click", (elem) => {
    elem.preventDefault();
    e.style.zIndex = "-1";
  });
});
const priceItems = document.querySelectorAll(".price-wrap");
priceItems.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.preventDefault();
    e.classList.toggle("inputChecked");
    if (e.classList.contains("inputChecked")) {
      e.childNodes[6].childNodes[1].checked = true;
    } else {
      e.childNodes[6].childNodes[1].checked = false;
    }
  });
});
