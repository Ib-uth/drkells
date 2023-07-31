$(document).ready(() => {
    $('.hero-slider__wrapper').carouFredSel({
      width: '100%',
      height: '100vh',
      responsive: true,
      swipe: {
        onTouch: true
      },
      next: {
        button: '.hero-slider__button--next'
      },
      prev: {
        button: '.hero-slider__button--prev'
      }
    });
  });