// swiper element
const prevBtnEl1 = document.querySelector(".swiperPrevBtn1");
const nextBtnEl1 = document.querySelector(".swiperNextBtn1");
const swiperEl = document.querySelector(".swiper-1");
const prevBtnEl2 = document.querySelector(".swiperPrevBtn2");
const nextBtnEl2 = document.querySelector(".swiperNextBtn2");
const swiperEl2 = document.querySelector(".swiper-2");
const prevBtnEl3 = document.querySelector(".swiperPrevBtn3");
const nextBtnEl3 = document.querySelector(".swiperNextBtn3");
const swiperEl3 = document.querySelector(".swiper-3");
// const prevBtnEl4 = document.querySelector(".swiperPrevBtn4");
// const nextBtnEl4 = document.querySelector(".swiperNextBtn4");
// const swiperEl4 = document.querySelector(".swiper-4");

nextBtnEl1.addEventListener("click", () => {
  swiperEl.swiper.slideNext();
});
prevBtnEl1.addEventListener("click", () => {
  swiperEl.swiper.slidePrev();
});

nextBtnEl2.addEventListener("click", () => {
  swiperEl2.swiper.slideNext();
});
prevBtnEl2.addEventListener("click", () => {
  swiperEl2.swiper.slidePrev();
});

nextBtnEl3.addEventListener("click", () => {
  swiperEl3.swiper.slideNext();
});
prevBtnEl3.addEventListener("click", () => {
  swiperEl3.swiper.slidePrev();
});

// nextBtnEl4.addEventListener("click", () => {
//   swiperEl4.swiper.slideNext();
// });
// prevBtnEl4.addEventListener("click", () => {
//   swiperEl4.swiper.slidePrev();
// });

// 화면 size 별 slide 수 설정
const swiperParams = {
  slidesPerView: 1.5,
  injectStylesUrls: ["../style/index.css"],
  breakpoints: {
    640: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1280: {
      slidesPerView: 3.5,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);
Object.assign(swiperEl2, swiperParams);
Object.assign(swiperEl3, swiperParams);
// Object.assign(swiperEl4, swiperParams);
// and now initialize it
swiperEl.initialize();
swiperEl2.initialize();
swiperEl3.initialize();
// swiperEl4.initialize();
