// swiper element
const prevBtnEl1 = document.querySelector(".swiperPrevBtn1");
const nextBtnEl1 = document.querySelector(".swiperNextBtn1");
const swiperEl = document.querySelector(".swiper-1");
const prevBtnEl2 = document.querySelector(".swiperPrevBtn2");
const nextBtnEl2 = document.querySelector(".swiperNextBtn2");
const swiperEl2 = document.querySelector(".swiper-2");

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

// 화면 size 별 slide 수 설정
const swiperParams = {
  slidesPerView: 2.5,
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

// and now initialize it
swiperEl.initialize();
swiperEl2.initialize();
