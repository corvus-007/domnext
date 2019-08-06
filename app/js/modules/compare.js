window.compare = (function (window, $) {
  'use strict';

  const compareTabs = document.querySelector('.compare-tabs');

  if (!compareTabs) {
    return;
  }

  $(compareTabs).tabslet();
})(window, jQuery);
