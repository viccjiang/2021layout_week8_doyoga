"use strict";

var swiper = new Swiper('.mySwiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 2,
  grid: {
    fill: 2,
    rows: 2
  },
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        fill: 2,
        rows: 2
      }
    },
    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1
      }
    }
  }
});
//# sourceMappingURL=all.js.map
