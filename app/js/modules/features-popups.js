window.featuresPopups = (function (window, $) {
  'use strict';

  $('[data-fancybox-feature]').fancybox();

  $('[data-feature-popup-slider]').flickity({
    pageDots: false,
    percentPosition: false
  });

  $('[data-fancybox-feature]').fancybox({
    afterShow() {
      $('[data-feature-popup-slider]').flickity('resize');
    }
  });

  function init() {

  }

  return {

  };

})(window, jQuery);
