window.map = (function(window, $) {
  'use strict';

  var dirname = window.util.isDevMode() ? '' : '/wp-content/themes/next/';

  var mapElem = document.querySelector('#map');

  if (!(mapElem && window.ymaps)) {
    return;
  }

  mapElem.classList.remove('.map--no-js');

  ymaps.ready(function() {
    var map = new ymaps.Map(mapElem, {
      center: [53.309132, 34.303341],
      zoom: 17,
      controls: []
    });

    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark(
      [53.309132, 34.303341],
      {
        hintContent: 'ЖК «Next на Куйбышева»'
      },
      {
        iconLayout: 'default#image',
        iconImageHref: dirname + 'images/icon-map-pin.svg',
        iconImageSize: [54, 54],
        iconImageOffset: [-25, -54]
      }
    );

    map.geoObjects.add(myPlacemark);
  });
})(window, jQuery);
