window.addEventListener("load", () => {
  setTimeout(loadBlock, 1500);
  function loadBlock() {
    let block = document.querySelectorAll(".block-bottom-item");
    block.forEach((e) => {
      e.style.transform = "scale(1)";
      e.style.transition = "1s";
    });
  }
});

const review = document.querySelector(".review");
// console.log(window.pageYOffset);
// console.log(review.scrollIntoView(alignToTop));
window.addEventListener("scroll", () => {
  //   console.log(review.offsetTop);
  //   console.log(window.pageYOffset);
  review.getBoundingClientRect();
  if (window.pageYOffset > review.offsetTop - 300) {
    review.style.transform = "translateX(0)";
    review.style.transition = "1s";
  }
});
