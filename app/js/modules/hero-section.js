window.heroSection = (function(window, $) {
  'use strict';

  $('[data-hero-info-slider]').flickity({
    pageDots: false,
    autoPlay: 5000,
    wrapAround: true,
    fade: true
  });
})(window, jQuery);
