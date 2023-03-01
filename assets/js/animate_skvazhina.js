// // const blockImage = document.querySelectorAll("");
// const blockImage = document.querySelector(
//   ".textblock-wrap-container:first-child .textblock-wrap-container-list"
// );
// const blockImageSecond = document.querySelector(
//   ".textblock-wrap-container:nth-child(3) .textblock-wrap-container-list"
// );
// const blockHeight = document.querySelector(
//   ".textblock-wrap-container:first-child"
// );
// const blockHeightSecond = document.querySelector(
//   ".textblock-wrap-container:nth-child(3)"
// );
// let topBlock = blockImage.getBoundingClientRect().top;
// let bottomBlock = blockImage.getBoundingClientRect().bottom;
// let topBlockSecond = blockImageSecond.getBoundingClientRect().top;
// let bottomBlockSecond = blockImageSecond.getBoundingClientRect().bottom;
// // let topBlock1 = topBlock;
// document.addEventListener("DOMContentLoaded", () => {
//   if (window.innerWidth > 1200) {
//     window.addEventListener("scroll", () => {
//       let scrollY = window.scrollY;
//       if (scrollY > topBlock - 80 && scrollY < bottomBlock - 878) {
//         scrollFirst();
//         blockImage.classList.add("fixed");
//         if (blockImage.classList.contains("fixed")) {
//           blockImage.classList.remove("fix");
//         }
//       } else {
//         blockImage.classList.remove("fixed");
//         if (
//           scrollY > bottomBlock - 878 &&
//           !blockImage.classList.contains("fixed")
//         ) {
//           blockImage.classList.add("fix");
//         }
//       }
//       if (scrollY > topBlockSecond && scrollY < bottomBlockSecond - 898) {
//         scrollSecond();
//         blockImageSecond.classList.add("fixed2");
//         blockImageSecond.classList.remove("fix2");
//       } else {
//         blockImageSecond.classList.remove("fixed2");
//         if (
//           scrollY > bottomBlockSecond - 898 &&
//           !blockImageSecond.classList.contains("fixed2")
//         ) {
//           blockImageSecond.classList.add("fix2");
//         }
//       }
//     });
//     function scrollFirst() {
//       let body = window.document.body.offsetWidth;
//       let wrap = document.querySelector(".textblock-wrap").offsetWidth;
//       let sum = (body - wrap) / 2;
//       let sum2 = wrap - blockImage.offsetWidth;
//       blockImage.style.left = sum + sum2 - 50 + "px";
//     }
//     function scrollSecond() {
//       let body = window.document.body.offsetWidth;
//       let wrap = document.querySelector(".textblock-wrap").offsetWidth;
//       let sum = (body - wrap) / 2;
//       let sum2 = wrap - blockImageSecond.offsetWidth;
//       blockImageSecond.style.left = sum + sum2 - 50 + "px";
//     }
//   }
// });

const hide5 = document.querySelector(".hide5");
const hide6 = document.querySelector(".hide6");
const textHide3 = document.querySelectorAll(".hide__block");
hide5.addEventListener("click", () => {
  hide5.style.display = "none";
  hide6.style.display = "block";
  textHide3.forEach((e) => {
    e.classList.remove("hide__block");
  });
});
hide6.addEventListener("click", () => {
  hide5.style.display = "block";
  hide6.style.display = "none";
  textHide3.forEach((e) => {
    e.classList.add("hide__block");
  });
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

const hide3 = document.querySelector(".hide3");
const hide4 = document.querySelector(".hide4");
const textHide2 = document.querySelectorAll(".text-hide2");
hide3.addEventListener("click", () => {
  hide3.style.display = "none";
  hide4.style.display = "block";
  textHide2.forEach((e) => {
    e.classList.remove("text-hide2");
  });
});
hide4.addEventListener("click", () => {
  hide3.style.display = "block";
  hide4.style.display = "none";
  textHide2.forEach((e) => {
    e.classList.add("text-hide2");
  });
});
const hide7 = document.querySelector(".hide7");
const hide8 = document.querySelector(".hide8");
const textHide4 = document.querySelectorAll(".text-hide4");
hide7.addEventListener("click", () => {
  hide7.style.display = "none";
  hide8.style.display = "block";
  textHide4.forEach((e) => {
    e.classList.remove("text-hide4");
  });
});
hide8.addEventListener("click", () => {
  hide7.style.display = "block";
  hide8.style.display = "none";
  textHide4.forEach((e) => {
    e.classList.add("text-hide4");
  });
});
