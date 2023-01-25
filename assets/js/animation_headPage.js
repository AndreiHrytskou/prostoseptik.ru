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
window.addEventListener("scroll", () => {
  review.getBoundingClientRect();
  if (window.pageYOffset > review.offsetTop - 500) {
    review.style.transform = "translateX(0)";
    review.style.transition = "0.5s";
  }
});
