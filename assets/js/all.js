"use strict";

var swiper = new Swiper('.mySwiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 2
  },
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
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
var customswiper = new Swiper('.customswiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 1,
  grid: {
    fill: 1,
    rows: 3
  },
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2
      }
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2
      }
    }
  }
});
//# sourceMappingURL=all.js.map
