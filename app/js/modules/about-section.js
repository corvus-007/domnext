window.aboutSection = (function(window, $) {
  'use strict';

  $('[data-about-section-slider]').flickity({
    pageDots: false,
    imagesLoaded: true,
    lazyLoad: 3,
  });
})(window, jQuery);
