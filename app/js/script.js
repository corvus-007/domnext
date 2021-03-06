document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  svg4everybody();
  floatLabel.init();

  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  $.fancybox.defaults.preventCaptionOverlap = false;

  $('input[type="tel"]').inputmask({
    mask: '+7 (999) 999-99-99'
  });

  window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
      document.body.classList.add('is-main-header-sticky');
    } else {
      document.body.classList.remove('is-main-header-sticky');
    }
  });

  // $('.js-reviews-slider').slick({
  //   accessibility: false,
  //   speed: 800,
  //   dots: false,
  //   arrows: false,
  //   asNavFor: '.js-authors-reviews-slider'
  // });

  // $('.js-authors-reviews-slider').slick({
  //   accessibility: false,
  //   slidesToShow: 3,
  //   centerPadding: '0',
  //   arrows: true,
  //   centerMode: true,
  //   speed: 800,
  //   dots: false,
  //   asNavFor: '.js-reviews-slider'
  // });

  var $aboutSlider = $('.js-about-slider');

  if ($aboutSlider.length) {
    var currentSlide;
    var slidesCount;
    var $sliderCounter = $aboutSlider.find('.about-slider__counter');

    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $sliderCounter.text(currentSlide + '/' + slidesCount);
    };

    $aboutSlider.on('init', function(event, slick) {
      updateSliderCounter(slick);
    });

    $aboutSlider.on('click', '.about-slider__control', function(evt) {
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

    $aboutSlider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $aboutSlider.slick({
      accessibility: false,
      speed: 800,
      dots: false,
      infinite: true,
      slide: '.about-slider__item',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false
          }
        }
      ]
    });
  }

  $('.common-tabs').tabslet({
    animation: true
  });

  const notificationEl = document.querySelector('[data-notification]');

  if (notificationEl) {
    window.notification.init();
  }

  // const flatFiltersElem = document.querySelector('.flat-filters');

  // if (flatFiltersElem) {
  //   var locationSearch = location.search;

  //   window.flatsResult.displayResult({
  //     data: locationSearch
  //   });

  //   window.flatFilters.init();

  //   var selectSortElem = document.querySelector('[name="sort-by"]');

  //   selectSortElem.addEventListener('change', function (evt) {
  //     window.flatsResult.renderFilteredFlats(window.util.filteredFlats);
  //   });

  //   var selectTypeNodeList = document.querySelectorAll('[data-target="checkboxes-select"]');
  //   [...selectTypeNodeList].forEach((it) => {
  //     new checkboxesSelect(it);
  //   });
  // }

  var commonPlansSlider = document.querySelector('[data-common-plans-slider]');

  if (commonPlansSlider) {
    $(commonPlansSlider).flickity({
      adaptiveHeight: false,
      imagesLoaded: true,
      wrapAround: true,
      lazyLoad: 3,
      selectedAttraction: 0.02
    });
  }

  const homepagePlansCarousel = document.querySelector(
    '[data-homepage-plans-carousel]'
  );

  if (homepagePlansCarousel) {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      $(homepagePlansCarousel).flickity({
        adaptiveHeight: false,
        imagesLoaded: true,
        wrapAround: true,
        lazyLoad: 2,
        cellAlign: 'right',
        selectedAttraction: 0.02
      });
    } else {
      $(homepagePlansCarousel).flickity({
        adaptiveHeight: false,
        imagesLoaded: true,
        wrapAround: true,
        lazyLoad: 3,
        selectedAttraction: 0.02
      });
    }
  }

  var actionsPreviewSlider = document.querySelector(
    '[data-actions-preview-slider]'
  );

  if (actionsPreviewSlider) {
    $(actionsPreviewSlider).flickity({
      pageDots: true,
      imagesLoaded: true,
      lazyLoad: 1,
      autoPlay: 5000,
      wrapAround: true
    });
  }
});
