const headerBlurBox = document.querySelector(".blurBox");

let scrolling;

window.addEventListener("scroll", () => {
  console.log(window.innerWidth);
  if (!scrolling) {
    if (window.innerWidth > 767) {
      headerBlurBox.style.display = "block";
    }
  }
  clearTimeout(scrolling);
  scrolling = setTimeout(() => {
    headerBlurBox.style.display = "none";
    scrolling = undefined;
  }, 400);
});

// 일정 높이 이상일 때 blurbox
// const personalContainer = document.querySelector(".personalContainer");
// const top = Math.abs(personalContainer.getBoundingClientRect().top);
// if (top >= 22) {
// headerBlurBox.style.opacity = 1;
// } else {
// headerBlurBox.style.opacity = 0;
// }
