// search
const searchBtn = document.querySelector(".header__menu-search");
const search = document.querySelector(".search");
const searchImg = document.querySelector(".search img");
const searchInput = document.querySelector("#search");

const searchShow = function () {
  search.classList.toggle("showSearch");
};
searchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  searchShow();
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == search || search.contains(target);

  if (!its_menu) {
    search.classList.remove("showSearch");
  }
});
// searchImg.addEventListener("click", () => {
//   let val = searchInput.value;
//   let body = document.body;
//   console.log(body);
//   if (val != "") {
//     body.forEach((e) => {
//       if (e.innerText.search(val)) {
//         showWord();
//       }
//     });
//   }
//   function showWord(string, pos, len) {
//     return (
//       string.slice(0, pos) +
//       "<mark>" +
//       string.slice(pos, pos + len) +
//       "</mark>" +
//       string.slice(pos + len)
//     );
//   }
// });
