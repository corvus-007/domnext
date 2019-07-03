"use strict";

window.util = function () {
  'use strict';

  return {
    KEYCODE_ESC: 27,
    URL_FILTER_HANDLER: 'reflats.ru/api/2/getApartmentsByFilter',
    compareTypes: {
      rooms: function rooms(a, b) {
        var roomList = {
          'Однокомнатная': '1',
          'Двухкомнатная': '2',
          'Трехкомнатная': '3',
          'Четырёхкомнатная': '4',
          'Студия': 'С'
        };
        var roomValueA = roomList[a.rooms] || '';
        var roomValueB = roomList[b.rooms] || '';
        var roomsA = roomValueA.toString();
        var roomsB = roomValueB.toString();
        return roomsA > roomsB ? 1 : -1;
      },
      floor: function floor(a, b) {
        var floorA = parseInt(a.floor, 10);
        var floorB = parseInt(b.floor, 10);
        return floorA - floorB;
      },
      area: function area(a, b) {
        var areaA = parseFloat(a.area);
        var areaB = parseFloat(b.area);
        return areaA - areaB;
      },
      price: function price(a, b) {
        var totalCostA = a.totalCost.replace(/\D/g, '');
        var totalCostB = b.totalCost.replace(/\D/g, '');
        var priceA = parseFloat(totalCostA);
        var priceB = parseFloat(totalCostB);
        return priceA - priceB;
      }
    },
    filteredFlats: null,
    formatNumber: function formatNumber(num) {
      var formatter = new Intl.NumberFormat('ru', {
        minimumFractionDigits: 0
      });
      return formatter.format(num);
    },
    sendRequest: function sendRequest(data, url) {
      data = data || '';
      return $.ajax({
        type: "GET",
        url: url,
        data: data,
        dataType: "JSON"
      });
    },
    isDevMode: function isDevMode() {
      return location.hostname === 'localhost';
    },
    setMaxHeight: function setMaxHeight(selector) {
      var maxHeight;
      var elements = document.querySelectorAll(selector);

      if (!elements.length) {
        return;
      }

      maxHeight = Array.from(elements).reduce(function findMaxHeight(prevValue, element) {
        var currentValue = element.offsetHeight;
        return prevValue > currentValue ? prevValue : currentValue;
      }, 0);
      Array.from(elements).forEach(function specifyMaxHeight(it) {
        it.style.height = maxHeight + 'px';
      });
    },
    getScrollbarWidth: function getScrollbarWidth() {
      var div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      return scrollWidth;
    }
  };
}();

window.splashScreen = function (window, $) {
  'use strict';

  var splashScreen = document.querySelector('.splash-screen');

  if (!splashScreen) {
    return;
  }

  var isLoaded = false;
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = window.util.getScrollbarWidth() + 'px';
  window.addEventListener('load', function () {
    hideSplashScreen();
  });
  setTimeout(function () {
    hideSplashScreen();
  }, 1000 * 8);

  function hideSplashScreen() {
    if (isLoaded) {
      return;
    }

    splashScreen.classList.add('splash-screen--hidden');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
    isLoaded = true;
  }
}(window, jQuery);

window.outCover = function () {
  'use strict';

  var outCover = document.querySelector('.out-cover');
  var outCoverToggle = document.querySelector('.out-cover-toggle');

  if (!(outCover && outCoverToggle)) {
    return;
  }

  var scrollWidth = window.util.getScrollbarWidth();

  var onOutCoverEscPress = function onOutCoverEscPress(event) {
    if (event.keyCode === window.util.KEYCODE_ESC) {
      hideOutCover();
    }
  };

  var showOutCover = function showOutCover() {
    outCover.classList.add('out-cover--opened');
    outCoverToggle.classList.add('out-cover-toggle--fired');
    document.body.classList.add('is-out-cover-opened');
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = scrollWidth + 'px';
    document.addEventListener('keydown', onOutCoverEscPress);
  };

  var hideOutCover = function hideOutCover() {
    outCover.classList.remove('out-cover--opened');
    outCoverToggle.classList.remove('out-cover-toggle--fired');
    document.body.classList.remove('is-out-cover-opened');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
    document.removeEventListener('keydown', onOutCoverEscPress);
  };

  outCoverToggle.addEventListener('click', function (event) {
    event.preventDefault();

    if (!this.classList.contains('out-cover-toggle--fired')) {
      showOutCover();
    } else {
      hideOutCover();
    }
  });
  return {
    show: showOutCover,
    hide: hideOutCover
  };
}();

window.animation = function (window, $) {
  'use strict';

  var controller = new ScrollMagic.Controller();
  var isRunHeaderTweens = localStorage.getItem('runHeaderTweens');
  window.addEventListener('load', function () {
    if (!isRunHeaderTweens) {
      var headerTl = new TimelineMax({
        onComplete: function onComplete() {
          localStorage.setItem('runHeaderTweens', true);
        }
      });
      headerTl.from('.hero__picture', 1, {
        scale: 1.6,
        opacity: 0
      }).from('.hero__title', 0.8, {
        scale: 0,
        opacity: 0
      }, '-=0.5').from('.main-header', 0.3, {
        y: -150,
        opacity: 0,
        ease: Back.easeInOut.config(1.7)
      }).from('.main-nav__to-open-plan', 0.2, {
        y: -50,
        opacity: 0,
        ease: Back.easeInOut.config(1.7)
      }).staggerFrom('.main-nav__list a', 0.2, {
        y: -50,
        opacity: 0,
        ease: Back.easeInOut.config(1.7)
      }, 0.1).from('.hero__scroll-down-pointer', 0.6, {
        y: 50,
        opacity: 0,
        ease: Back.easeInOut.config(1.7)
      });
    }

    var tl = new TimelineMax();
    tl.staggerFrom('.features__item', 0.8, {
      opacity: 0,
      scale: 0.2,
      ease: Back.easeInOut.config(1.7)
    }, 0.15);
    new ScrollMagic.Scene({
      triggerElement: '.features',
      triggerHook: 1,
      reverse: false
    }).setTween(tl).addTo(controller); // about page

    (function () {
      $('.about__incut').each(function (index, item) {
        new ScrollMagic.Scene({
          triggerElement: '.about-intro',
          reverse: false
        }).setClassToggle('.about-intro', 'about-intro--active').addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: item,
          triggerHook: 0.8,
          reverse: false
        }).setTween(TweenMax.from(item, 1, {
          opacity: 0,
          y: 50
        })).addTo(controller);
      });
      $('.common-significance').each(function (index, item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          triggerHook: 0.8,
          reverse: false
        }).setClassToggle(item, 'common-significance--active').addTo(controller);
      });
    })();
  });
}(window, jQuery);

window.ambilight = function (window, $) {
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
}(window, jQuery);

window.map = function (window, $) {
  'use strict';

  var dirname = window.util.isDevMode() ? '' : '/wp-content/themes/next/';
  var mapElem = document.querySelector('#map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.map--no-js');
  ymaps.ready(function () {
    var map = new ymaps.Map(mapElem, {
      center: [53.309132, 34.303341],
      zoom: 17,
      controls: []
    });
    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark([53.309132, 34.303341], {
      hintContent: "ЖК «Next на Куйбышева»"
    }, {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/icon-map-pin.svg',
      iconImageSize: [54, 54],
      iconImageOffset: [-25, -54]
    });
    map.geoObjects.add(myPlacemark);
  });
}(window, jQuery); ////=require modules/district.js


window.contactsMap = function (window, $) {
  'use strict';

  var dirname = window.util.isDevMode() ? '' : '/wp-content/themes/next/';
  var mapElem = document.querySelector('#contacts-map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.contacts__map--no-js');
  ymaps.ready(function () {
    var map = new ymaps.Map(mapElem, {
      center: [53.273316, 34.346687],
      zoom: 17,
      controls: []
    });
    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark([53.273316, 34.346687], {
      hintContent: "г. Брянск, ул. Степная, д. 12"
    }, {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/icon-map-pin.svg',
      iconImageSize: [54, 54],
      iconImageOffset: [-25, -54]
    });
    map.geoObjects.add(myPlacemark);
  });
}(window, jQuery); ////=require modules/checkboxes-select-class.js
////=require modules/favorites-cards.js
////=require modules/flats-cards.js
////=require modules/flats-sort.js
////=require modules/flats-result.js
////=require modules/flat-filters.js
////=require modules/flat.js


window.notification = function (window, $) {
  'use strict';

  var DELAY_BEFORE_SHOW = 6000;
  var notification = document.querySelector('[data-notification]');

  if (!notification) {
    return;
  }

  var wasWatched = sessionStorage.getItem('is_notification_watched') || false;
  var notificationClose = notification.querySelector('[data-notification-close]');

  function init() {
    if (!wasWatched) {
      setTimeout(function () {
        open();
      }, DELAY_BEFORE_SHOW);
    } else {
      close();
    }

    notificationClose.addEventListener('click', onNotificationCloseClickHandler);
  }

  function onNotificationCloseClickHandler(evt) {
    evt.preventDefault();
    close();
  }

  function open() {
    notification.classList.remove('notification--closed');
    notification.classList.add('notification--open');
    setTimeout(addAnimationClass, 800);
  }

  function close() {
    notification.classList.remove('notification--open');
    notification.classList.add('notification--closed');
    writeToSessionStorage('is_notification_watched', true);
  }

  function addAnimationClass() {
    notification.classList.add('notification--start-animation');
  }

  function removeFromSessionStorage(key) {
    sessionStorage.removeItem(key);
  }

  function writeToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
  }

  return {
    init: init,
    open: open,
    close: close
  };
}(window, jQuery);

window.featuresPopups = function (window, $) {
  'use strict';

  $('[data-fancybox-feature]').fancybox();
  $('[data-feature-popup-slider]').flickity({
    pageDots: false,
    percentPosition: false
  });
  $('[data-fancybox-feature]').fancybox({
    afterShow: function afterShow() {
      $('[data-feature-popup-slider]').flickity('resize');
    }
  });

  function init() {}

  return {};
}(window, jQuery);

window.aboutSection = function (window, $) {
  'use strict';

  $('[data-about-section-slider]').flickity({
    pageDots: false
  });
}(window, jQuery);