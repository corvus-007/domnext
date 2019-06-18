document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  svg4everybody();

  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  $.fancybox.defaults.preventCaptionOverlap = false;

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });

  var scrollDownPointer = document.querySelector('.scroll-down-pointer');
  var headerStickyHeight = 76;

  if (scrollDownPointer) {
    scrollDownPointer.addEventListener('click', function (evt) {
      evt.preventDefault();
      window.scrollTo({
        top: document.documentElement.clientHeight - headerStickyHeight,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
      document.body.classList.add('is-main-header-sticky');
    } else {
      document.body.classList.remove('is-main-header-sticky');
    }
  });

  $('.js-reviews-slider').slick({
    accessibility: false,
    speed: 800,
    dots: false,
    arrows: false,
    asNavFor: '.js-authors-reviews-slider'
  });

  $('.js-authors-reviews-slider').slick({
    accessibility: false,
    slidesToShow: 3,
    centerPadding: '0',
    arrows: true,
    centerMode: true,
    speed: 800,
    dots: false,
    asNavFor: '.js-reviews-slider'
  });

  var $aboutSlider = $('.js-about-slider');

  if ($aboutSlider.length) {
    var currentSlide;
    var slidesCount;
    var $sliderCounter = $aboutSlider.find('.about-slider__counter');

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $sliderCounter.text(currentSlide + '/' + slidesCount);
    };

    $aboutSlider.on('init', function (event, slick) {
      updateSliderCounter(slick);
    });

    $aboutSlider.on('click', '.about-slider__control', function (evt) {
      evt.preventDefault();
      var direction = this.dataset.slideAction;
      switch (direction) {
        case 'slide-prev':
          $aboutSlider.slick('slickPrev');
          break;
        case 'slide-next':
          $aboutSlider.slick('slickNext');
          break;
      }
    });

    $aboutSlider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $aboutSlider.slick({
      accessibility: false,
      speed: 800,
      dots: false,
      infinite: true,
      slide: '.about-slider__item',
      responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }]
    });
  }

  $('.common-tabs').tabslet({
    animation: true
  });

  const notificationEl = document.querySelector('[data-notification]');

  if (notificationEl) {
    window.notification.init();
  }
});
