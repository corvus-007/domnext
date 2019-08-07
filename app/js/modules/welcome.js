window.welcome = (function(window, $) {
  'use strict';


  const welcomeSection = document.querySelector('.welcome');

  if (!welcomeSection) {
    return;
  }

  $('[data-hero-info-slider]').flickity({
    draggable: false,
    pageDots: false,
    autoPlay: 5200,
    wrapAround: true,
    cellAlign: 'right',
    fade: true
  });

  const welcomeCarousel = document.querySelector('[data-welcome-carousel]');
  const navigationHolder = welcomeCarousel.querySelector(
    '.welcome-carousel__navigation-holder'
  );
  const carouselCounter = welcomeCarousel.querySelector(
    '.welcome-carousel-navigation__counter'
  );
  const buttonPrev = welcomeCarousel.querySelector(
    '.welcome-carousel-navigation__button--prev'
  );
  const buttonNext = welcomeCarousel.querySelector(
    '.welcome-carousel-navigation__button--next'
  );

  const welcomeCarouselInstance = new Flickity(welcomeCarousel, {
    cellSelector: '.carousel-cell',
    adaptiveHeight: false,
    wrapAround: true,
    autoPlay: 6000,
    bgLazyLoad: true,
    bgLazyLoad: 2,
    prevNextButtons: false,
    selectedAttraction: 0.02
  });

  const cellsCount = welcomeCarouselInstance.cells.length;

  if (cellsCount <= 1) {
    navigationHolder.hidden = true;
  } else {
    updateCounter(getSelectedIndexSlide());

    welcomeCarouselInstance.on('select', function(index) {
      updateCounter(index + 1);
    });

    buttonPrev.addEventListener('click', function() {
      welcomeCarouselInstance.previous();
      updateCounter(getSelectedIndexSlide());
    });

    buttonNext.addEventListener('click', function() {
      welcomeCarouselInstance.next();
      updateCounter(getSelectedIndexSlide());
    });
  }

  function updateCounter(selectedIndex) {
    const size = welcomeCarouselInstance.cells.length;
    carouselCounter.textContent = `${selectedIndex}/${size}`;
  }

  function getSelectedIndexSlide() {
    return welcomeCarouselInstance.selectedIndex + 1;
  }
})(window, jQuery);
