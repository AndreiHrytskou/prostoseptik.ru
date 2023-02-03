let video = document.querySelector(".video-bottom__item");
let videoImg = document.querySelector(".video-bottom__item-img");
let videoFrame = document.querySelector(".video-bottom__item iframe");
let heightImg;
video.addEventListener("click", (e) => {
  e.preventDefault();
  let videoSrc = video.href;
  let videoId = videoSrc.substr(17) + "?rel=0&autoplay=1";
  videoImg.style.display = "none";
  let link = "https://www.youtube.com/embed/" + videoId;
  videoFrame.src = link;
  videoFrame.style.display = "block";
  videoFrame.setAttribute("allow", "autoplay");
});
videoImg.onload = function () {
  heightImg = this.height;
  videoFrame.style.height = `${heightImg}px`;
};
