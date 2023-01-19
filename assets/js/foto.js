let item = document.querySelectorAll(".foto-check-list-item");
const arrItems = document.querySelector(".foto-check-list");
const filter = document.querySelector(".foto-filtr");
// if (window.screen.width > 769) {
//   item.forEach((e) => {
//     e.addEventListener("click", () => {
//       e.classList.toggle("item_active");
//     });
//   });
// }
item.forEach((e) => {
  e.addEventListener("click", () => {
    if (!item[0].classList.contains("item_active")) {
      e.classList.toggle("item_active");
    }
    if (item[e].classList.contains("item_active")) {
      item[0].classList.remove("item_active");
      e.classList.toggle("item_active");
    }
  });
});
// foto-galery

function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

//
function slidesPlugin2(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide2");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses2();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses2() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
//
function slidesPlugin3(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide3");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses3();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses3() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
//
function slidesPlugin4(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide4");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses4();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses4() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin();
slidesPlugin2();
slidesPlugin3();
slidesPlugin4();
// 768
// if (window.screen.width < 769) {
//   filter.addEventListener("click", () => {
//     arrItems.classList.toggle("items-show");
//     item.forEach((e) => {
//       e.addEventListener("click", () => {
//         e.classList.toggle("item_active");
//       });
//     });
//     filter.classList.toggle("filter-show");
//   });
// }
// btn

const btnFoto = document.querySelector(".foto-more");
let arrFoto = document.querySelectorAll(".foto-galery-wrap");
let amountFoto = [];
// let newAmount = (amountProd = 6);

arrFoto.forEach((el) => {
  amountFoto.push(el);
  return amountFoto;
});
amountFoto.forEach((el) => {
  el.style.display = "none";
});
let newArrFoto = amountFoto.slice(0, 4);
newArrFoto.forEach((e) => {
  e.style.display = "flex";
});
btnFoto.addEventListener("click", (e) => {
  e.preventDefault();
  amountFoto.forEach((elem) => {
    elem.style.display = "flex";
  });
});
