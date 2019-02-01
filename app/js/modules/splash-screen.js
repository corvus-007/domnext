window.splashScreen = (function (window, $) {
  'use strict';

  var splashScreen = document.querySelector('.splash-screen');

  if (!splashScreen) {
    return;
  }

  var scrollWidth = window.util.getScrollbarWidth();

  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = scrollWidth + 'px';

  window.addEventListener('load', function () {
    splashScreen.classList.add('splash-screen--hidden');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
  });
})(window, jQuery);
