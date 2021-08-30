var swiper = new Swiper('.mySwiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 2,
  },
  spaceBetween: 30,

  breakpoints: {

    768: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },

    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1,
      },
    },
  },
});



var customswiper = new Swiper('.customswiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 1,
  grid: {
    fill: 1,
    rows: 3,
  },
  spaceBetween: 30,

  breakpoints: {

    768: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },

    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
});

var customswiper = new Swiper('.course-swiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 1,
  grid: {
    fill: 1,
    rows: 4,
  },
  spaceBetween: 30,

  breakpoints: {

    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
    },

    992: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
    },
  },
});

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide: true,
  buttonClass: 'btn primary text-secondary',
  nextArrow: `<span class="material-icons">
chevron_right
</span>`,
  prevArrow: `<span class="material-icons">
chevron_left
</span>`
});


