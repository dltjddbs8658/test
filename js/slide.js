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

// slide 설정
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
      slidesPerView: 6.5,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};
const slideEventFnc = (swiperEl, nextBtn, prevBtn) => {
  nextBtn.addEventListener("click", () => {
    swiperEl.swiper.slideNext();
  });
  prevBtn.addEventListener("click", () => {
    swiperEl.swiper.slidePrev();
  });

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();
};

slideEventFnc(swiperEl, nextBtnEl1, prevBtnEl1);
slideEventFnc(swiperEl2, nextBtnEl2, prevBtnEl2);
slideEventFnc(swiperEl3, nextBtnEl3, prevBtnEl3);