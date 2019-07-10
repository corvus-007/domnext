window.animation = (function (window, $) {
  'use strict';

  var controller = new ScrollMagic.Controller();

  window.addEventListener('load', function () {
    // about page
    (function () {
      $('.about__incut').each(function (index, item) {

        new ScrollMagic.Scene({
            triggerElement: '.about-intro',
            reverse: false
          })
          .setClassToggle('.about-intro', 'about-intro--active')
          .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.8,
            reverse: false
          })
          .setTween(TweenMax.from(item, 1, {
            opacity: 0,
            y: 50
          }))
          .addTo(controller);
      });

      $('.common-significance').each(function (index, item) {
        new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.8,
            reverse: false
          })
          .setClassToggle(item, 'common-significance--active')
          .addTo(controller);
      });
    })();
  });
})(window, jQuery);
