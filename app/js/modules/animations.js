window.animation = (function (window, $) {
  'use strict';

  var controller = new ScrollMagic.Controller();

  var isRunHeaderTweens = localStorage.getItem('runHeaderTweens');

  window.addEventListener('load', function () {
    if (!isRunHeaderTweens) {
      var headerTl = new TimelineMax({
        onComplete: function () {
          localStorage.setItem('runHeaderTweens', true);
        }
      });

      headerTl
        .from('.hero__picture', 1, {
          scale: 1.6,
          opacity: 0
        })
        .from('.hero__title', 0.8, {
          scale: 0,
          opacity: 0
        }, '-=0.5')
        .from('.main-header', 0.3, {
          y: -150,
          opacity: 0,
          ease: Back.easeInOut.config(1.7),
        })
        .from('.main-nav__to-open-plan', 0.2, {
          y: -50,
          opacity: 0,
          ease: Back.easeInOut.config(1.7),
        })
        .staggerFrom('.main-nav__list a', 0.2, {
          y: -50,
          opacity: 0,
          ease: Back.easeInOut.config(1.7),
        }, 0.1)
        .from('.hero__scroll-down-pointer', 0.6, {
          y: 50,
          opacity: 0,
          ease: Back.easeInOut.config(1.7),
        });
    }

    var tl = new TimelineMax();

    tl.staggerFrom('.features__item', 0.8, {
      opacity: 0,
      scale: 0.2,
      ease: Back.easeInOut.config(1.7),
    }, 0.15);

    new ScrollMagic.Scene({
        triggerElement: '.features',
        triggerHook: 1,
        reverse: false
      })
      .setTween(tl)
      .addTo(controller);


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
