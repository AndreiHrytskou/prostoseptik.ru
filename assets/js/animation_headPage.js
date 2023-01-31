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
  console.log(scroll);
  console.log(topBlock2 - 130);
  if (scroll > topBlock2 - 130) {
    blockMiddle.classList.add("animate");
  }
});
// const paginat = document.querySelector(".pagination");
// paginat.addEventListener("focus", () => {
//   paginat.style.zIndex = "-1";
//   paginat.style.backgroundColor = "transparent";
// });
