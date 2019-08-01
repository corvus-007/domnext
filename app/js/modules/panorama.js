window.panorama = (function () {
  'use strict';

  var panorama = document.querySelector('.panorama');

  if (!panorama) {
    return;
  }

  var panoramaSVG = panorama.querySelector('.panorama__svg');

  const territoryPoints = panorama.querySelectorAll('#territory-points use');
  const panoramaPopupPictures = panorama.querySelector('.panorama__popup-pictures');
  const panoramaPopupPicturresItems = panorama.querySelectorAll('.panorama__popup-pictures-item');
  let currentPointID = '';

  panoramaSVG.addEventListener('mouseover', function (evt) {
    const target = evt.target;
    const point = target.closest('#territory-points use');

    if (!point) {
      return;
    }

    panoramaPopupPictures.classList.add('panorama__popup-pictures--active');

    currentPointID = point.id;

    [...panoramaPopupPicturresItems].forEach((it, index) => {
      const isSameID = currentPointID === it.dataset.pointId;
      it.classList.toggle('panorama__popup-pictures-item--active', isSameID);
    });
  });

  panoramaSVG.addEventListener('mouseout', function (evt) {
    const target = evt.target;
    const point = target.closest('#territory-points use');

    if (!point) {
      return;
    }

    panoramaPopupPictures.classList.remove('panorama__popup-pictures--active');
    [...panoramaPopupPicturresItems].forEach((it) => {
      it.classList.remove('panorama__popup-pictures-item--active');
    });

    currentPointID = '';
  });

  return {
    panorama: panorama,
    panoramaSVG: panoramaSVG
  };
})();
