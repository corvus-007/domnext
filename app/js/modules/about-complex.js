window.aboutComplex = (function(window, $) {
  'use strict';

  const aboutComplex = document.querySelector('.about-complex');

  if (!aboutComplex) {
    return;
  }

  const acBenefitsDescriptionsCarousel = aboutComplex.querySelector(
    '[data-ac-benefits-descriptions-carousel]'
  );
  const acBenefitsImagesCarousel = aboutComplex.querySelector(
    '[data-ac-benefits-images-carousel]'
  );

  const acBenefitsDescriptionsCarouselInstance = new Flickity(
    acBenefitsDescriptionsCarousel,
    {
      prevNextButtons: false,
      pageDots: false
    }
  );

  const benefitsDescriptionsNav = document.querySelector(
    '.ac-benefits-descriptions-navigation'
  );
  const benefitsDescriptionsPrev = benefitsDescriptionsNav.querySelector(
    '.ac-benefits-descriptions-navigation__button--prev'
  );
  const benefitsDescriptionsNext = benefitsDescriptionsNav.querySelector(
    '.ac-benefits-descriptions-navigation__button--next'
  );
  const benefitsDescriptionsCounter = benefitsDescriptionsNav.querySelector(
    '.ac-benefits-descriptions-navigation__counter'
  );

  function updateCounter(selectedIndex) {
    const size = acBenefitsDescriptionsCarouselInstance.cells.length;
    // const selectedIndex = acBenefitsDescriptionsCarouselInstance.selectedIndex + 1;
    benefitsDescriptionsCounter.textContent = `${selectedIndex}/${size}`;
  }

  acBenefitsDescriptionsCarouselInstance.on('select', function (index) {
    updateCounter(index + 1);
  });

  const selectedIndex = acBenefitsDescriptionsCarouselInstance.selectedIndex + 1;
  updateCounter(1);

  benefitsDescriptionsPrev.addEventListener('click', function() {
    acBenefitsDescriptionsCarouselInstance.previous();
    const selectedIndex = acBenefitsDescriptionsCarouselInstance.selectedIndex + 1;
    updateCounter(selectedIndex);
  });

  benefitsDescriptionsNext.addEventListener('click', function() {
    acBenefitsDescriptionsCarouselInstance.next();
    const selectedIndex = acBenefitsDescriptionsCarouselInstance.selectedIndex + 1;
    updateCounter(selectedIndex);
  });

  const acBenefitsImagesCarouselInstance = new Flickity(
    acBenefitsImagesCarousel,
    {
      asNavFor: acBenefitsDescriptionsCarousel,
      lazyLoad: 2,
      draggable: false,
      prevNextButtons: false,
      pageDots: false
    }
  );
})(window, jQuery);
