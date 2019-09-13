window.heroSection = (function(window, $) {
  'use strict';

  $('[data-hero-info-slider]').flickity({
    draggable: false,
    pageDots: false,
    autoPlay: 5000,
    wrapAround: true,
    cellAlign: 'right',
    fade: true
  });
})(window, jQuery);
