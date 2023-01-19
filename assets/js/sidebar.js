window.onload = function () {
  slideOne();
  slideTwo();
  slideThree();
  slideFour();
  slideFive();
  slideSix();
};
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
//

let slider3 = document.getElementById("slider-3");
let slider4 = document.getElementById("slider-4");
let displayVal3 = document.getElementById("range3");
let displayVal4 = document.getElementById("range4");
let minGap2 = 0;
let sliderTrack2 = document.querySelector(".slider-track2");
let sliderMaxValue2 = document.getElementById("slider-3").max;
function slideThree() {
  if (parseInt(slider4.value) - parseInt(slider3.value) <= minGap2) {
    slider3.value = parseInt(slider4.value) - minGap2;
  }
  displayVal3.textContent = slider3.value;
  fillColor2();
}
function slideFour() {
  if (parseInt(slider4.value) - parseInt(slider3.value) <= minGap2) {
    slider4.value = parseInt(slider3.value) + minGap2;
  }
  displayVal4.textContent = slider4.value;
  fillColor2();
}
function fillColor2() {
  percent3 = (slider3.value / sliderMaxValue2) * 100;
  percent4 = (slider4.value / sliderMaxValue2) * 100;
  sliderTrack2.style.background = `linear-gradient(to right, #dadae5 ${percent3}% , #3264fe ${percent3}% , #3264fe ${percent4}%, #dadae5 ${percent4}%)`;
}

let slider5 = document.getElementById("slider-5");
let slider6 = document.getElementById("slider-6");
let displayVal5 = document.getElementById("range5");
let displayVal6 = document.getElementById("range6");
let minGap3 = 0;
let sliderTrack3 = document.querySelector(".slider-track3");
let sliderMaxValue3 = document.getElementById("slider-5").max;
function slideFive() {
  if (parseInt(slider6.value) - parseInt(slider5.value) <= minGap3) {
    slider5.value = parseInt(slider6.value) - minGap3;
  }
  displayVal5.textContent = slider5.value;
  fillColor3();
}
function slideSix() {
  if (parseInt(slider6.value) - parseInt(slider5.value) <= minGap3) {
    slider6.value = parseInt(slider5.value) + minGap3;
  }
  displayVal6.textContent = slider6.value;
  fillColor3();
}
function fillColor3() {
  percent5 = (slider5.value / sliderMaxValue3) * 100;
  percent6 = (slider6.value / sliderMaxValue3) * 100;
  sliderTrack3.style.background = `linear-gradient(to right, #dadae5 ${percent5}% , #3264fe ${percent5}% , #3264fe ${percent6}%, #dadae5 ${percent6}%)`;
}
