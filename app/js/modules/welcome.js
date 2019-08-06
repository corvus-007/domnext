window.welcome = (function (window, $) {
  'use strict';

  const welcomeCarousel = document.querySelector('[data-welcome-carousel]');

  $(welcomeCarousel).flickity({
    adaptiveHeight: false,
    wrapAround: true,
    // autoPlay: 6000,
    bgLazyLoad: true,
    bgLazyLoad: 2,
    selectedAttraction: 0.02
  });

})(window, jQuery);
