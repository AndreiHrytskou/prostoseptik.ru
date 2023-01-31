// search
const searchBtn = document.querySelector(".header__menu-search");
const search = document.querySelector(".search");
const searchInput = document.querySelector("#search");
const fon = document.createElement("div");

const searchShow = function () {
  search.classList.toggle("showSearch");
};
searchBtn.addEventListener("click", (e) => {
  document.body.append(fon);
  fon.classList.toggle("background__white");
  searchBtn.classList.toggle("searchActive");
  e.stopPropagation();
  searchShow();
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == search || search.contains(target);
  let its_searchBtn = target == searchBtn || searchBtn.contains(target);
  let its_fon = target == fon || fon.contains(target);

  if (!its_menu && !its_searchBtn && its_fon) {
    search.classList.remove("showSearch");
    searchBtn.classList.toggle("searchActive");
    fon.classList.toggle("background__white");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  if (width > 768) {
    var swiper2 = new Swiper(".mySwiper100", {
      slidesPerView: 3,
      spaceBetween: 23,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        // when window width is >= 300px
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
});
