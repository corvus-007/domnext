window.district = (function(window, $) {
  'use strict';

  var dirname = 0 ? '' : '/wp-content/themes/greenwood/';

  // Группы объектов
  var groups = [{
    name: "Университет",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_university.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.304433, 34.303860],
      name: "Брянский государственный технический университет"
    }, {
      center: [53.306331, 34.296707],
      name: "Средняя общеобразовательная школа №11 им. П.М. Камозина"
    }, {
      center: [53.299495, 34.300957],
      name: "Средняя общеобразовательная школа №52"
    }, {
      center: [53.304587, 34.289841],
      name: "Средняя общеобразовательная школа №67"
    }, {
      center: [53.305787, 34.309176],
      name: "Лицей №2 им. М.В. Ломоносова"
    }]
  }, {
    name: "Почта России",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_post.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.309403, 34.305008],
      name: "Почтовое отделение №35"
    }]
  }, {
    name: "Мед. учреждение",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_health.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.305824, 34.311631],
      name: "Брянская городская поликлиника №1"
    }, {
      center: [53.309081, 34.315911],
      name: "Брянская городская поликлиника №9"
    }, {
      center: [53.302279, 34.311386],
      name: "Брянская городская детская стоматологическая поликлиника №1"
    }, {
      center: [53.300802, 34.298648],
      name: "Брянская городская больница №1"
    }, {
      center: [53.307834, 34.313990],
      name: "Перинатальный центр, Брянская областная больница №1"
    }]
  }, {
    name: "Питание",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_food.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.308303, 34.303167],
      name: "McDonald`s, ресторан быстрого питания"
    }]
  }, {
    name: "Шоппинг",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_mall.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.307884, 34.301325],
      name: "ТРЦ «БУМ сити»"
    }, {
      center: [53.307974, 34.301711],
      name: "Кинотеатр «Панорама»"
    }, {
      center: [53.312642, 34.303885],
      name: "Бежицкий рынок"
    }]
  }, {
    name: "Парк",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_park.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.311500, 34.308831],
      name: "Парк «Майский»"
    }, {
      center: [53.309911, 34.312927],
      name: "Парк им. А.С. Пушкина"
    }]
  }, {
    name: "Фитнесс-центр",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_gym.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.309069, 34.304918],
      name: "Fit Сity, фитнес-студия"
    }, {
      center: [53.307234, 34.307137],
      name: "«Фитнес экспресс», спортивный центр"
    }]
  }, {
    name: "Транспорт",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_bus-station.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.313439, 34.308802],
      name: "Бежицкая автостанция"
    }, {
      center: [53.314804, 34.308718],
      name: "Железнодорожная станция «Орджоникидзеград»"
    }]
  }, {
    name: "Детский сад",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_kids.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.303392, 34.295607],
      name: "«Радуга», детский сад №3"
    }, {
      center: [53.302265, 34.300456],
      name: "«Колокольчик», детский сад №7"
    }, {
      center: [53.307610, 34.310631],
      name: "«Зёрнышко», детский сад №11"
    }, {
      center: [53.301639, 34.302216],
      name: "«Василек», детский сад №65"
    }, {
      center: [53.305400, 34.299860],
      name: "«Чебурашка», детский сад №75"
    }, {
      center: [53.305660, 34.288473],
      name: "«Моржонок», детский сад №140"
    }]
  }, {
    name: "Библиотека",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_library.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.306647, 34.303034],
      name: "Центральная городская библиотека им. П.Л. Проскурина"
    }, {
      center: [53.307653, 34.305205],
      name: "Детская библиотека №8"
    }]
  }, {
    name: "Музей",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_museum.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.306185, 34.314162],
      name: "Музей братьев Ткачёвых"
    }]
  }, {
    name: "Дворец культуры",
    style: "islands#redIcon",
    opt: {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/district/district_palace.svg',
      iconImageSize: [36, 45],
      iconImageOffset: [-18, -45]
    },
    items: [{
      center: [53.310419, 34.308604],
      name: "Дворец культуры БМЗ"
    }]
  }];

  var district = document.querySelector('.district');

  if (!district) {
    return;
  }

  var districtMap = document.querySelector('#district-map');
  var districtLegend = district.querySelector('.district-legend');
  var districtLegendToggle = district.querySelector('.district-legend-toggle');
  var districtLegendClose = districtLegend.querySelector(
    '.district-legend__close'
  );

  function showLegend() {
    districtLegend.classList.remove('district-legend--hidden');
    districtLegendToggle.classList.add('district-legend-toggle--hidden');
  }

  function hideLegend() {
    districtLegend.classList.add('district-legend--hidden');
    districtLegendToggle.classList.remove('district-legend-toggle--hidden');
  }

  districtLegendToggle.addEventListener('click', function() {
    showLegend();
  });

  districtLegendClose.addEventListener('click', function() {
    hideLegend();
  });

  districtMap.classList.remove('.district__map--no-js');


  ymaps.ready(function() {
    var map = new ymaps.Map(districtMap, {
      center: [53.309132, 34.303341],
      zoom: 15,
      // controls: []
    });

    for (var i = 0, l = groups.length; i < l; i++) {
      createMenuGroup(groups[i]);
    }

    map.behaviors.disable(['scrollZoom']);

    var myPlacemark = new ymaps.Placemark([53.309132, 34.303341], {
      hintContent: "ЖК «Next на Куйбышева»"
    }, {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/icon-map-pin.svg',
      iconImageSize: [54, 54],
      iconImageOffset: [-25, -54]
    });

    function createMenuGroup(group) {
      // Коллекция для геообъектов группы.
      var collection = new ymaps.GeoObjectCollection(null, group.opt);
      // Контейнер для подменю.

      // Добавляем коллекцию на карту.
      map.geoObjects.add(collection);

      for (var j = 0, m = group.items.length; j < m; j++) {
        createSubMenu(group.items[j], collection);
      }
    }

    function createSubMenu(item, collection) {
      // Пункт подменю.
      // Создаем метку.
      var placemark = new ymaps.Placemark(item.center, {
        hintContent: item.name
      });

      // Добавляем метку в коллекцию.
      collection.add(placemark);
      // Добавляем пункт в подменю.

    }

    map.geoObjects.add(myPlacemark);
  });
})(window, jQuery);
