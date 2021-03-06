window.flat = (function (window, $) {
  'use strict';

  var flat = document.querySelector('.flat');

  if (!flat) {
    return;
  }

  init();

  function init() {
    var flat = document.querySelector('.flat');
    // var flatPlans = flat.querySelectorAll('.flat__plan');
    var flatPlan = flat.querySelector('.flat-plan');
    var flatDetail = flat.querySelector('.flat-detail');
    var frame = flat.querySelector('.flat-plan__frame');
    var planZoomToImage = flatPlan.querySelector('.flat-plan__zoom-to-image');
    var planAdjuster = flatPlan.querySelector('.flat-plan__adjuster');
    var planImage = flatPlan.querySelector('.flat-plan__image');

    function processingPlan(plan) {
      planAdjuster = plan.querySelector('.flat-plan__adjuster');
      planImage = plan.querySelector('.flat-plan__image');

      function updatePlanAdjuster(ratio) {
        planAdjuster.style.paddingTop = ratio * 100 + '%';
      }

      updatePlanAdjuster(getImageRatio(planImage));

      planImage.addEventListener('load', function () {
        updatePlanAdjuster(getImageRatio(planImage));
      });

      planImage.addEventListener('click', function (event) {
        planImage.classList.toggle('flat-plan__image--scale');
      });
    }

    function getImageRatio(image) {
      return image.naturalHeight / image.naturalWidth;
    }

    function getDetailHeight() {
      return flatDetail.offsetHeight;
    }

    if (window.matchMedia("(pointer: coarse)").matches) {
      processingPlan(flatPlan);
      planZoomToImage.addEventListener('click', function(evt){
        evt.preventDefault();
      });
    } else {
      // $(frame).zoom();
      $(planZoomToImage).fancybox({
        slideClass: 'flat-plan-popup',
        animationEffect: 'zoom-in-out'
      });
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      flatPlan.style.height = getDetailHeight() + 'px';
    }

    // if (window.matchMedia("(min-width: 768px) and not (pointer: coarse)").matches) {
    // }
  }

  return {
    init: init
  };
})(window, jQuery);
