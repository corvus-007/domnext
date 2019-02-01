window.ambilight = (function (window, $) {
  'use strict';

  var supportCSS = window.CSS && window.CSS.supports;

  if (!supportCSS) {
    return;
  }

  var supportFilter = CSS.supports('filter', 'blur(2px)');

  var ambilightList = document.querySelectorAll('[data-ambilight]');

  if (!ambilightList.length && supportFilter) {
    return;
  }

  Array.from(ambilightList).forEach(function (item) {
    var cloneItem = item.cloneNode();
    delete cloneItem.dataset.originImage;
    delete cloneItem.dataset.ambilight;
    cloneItem.dataset.ambilightBlur = '';
    cloneItem.classList.add('ambilight-blur');

    item.insertAdjacentElement('beforebegin', cloneItem);
  });
})(window, jQuery);
