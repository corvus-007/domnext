window.floatLabel = (() => {
  // add active class and placeholder
  const handleFocus = e => {
    const target = e.target;
    target.closest('.field').classList.add('field--active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder') || '');
  };

  // remove active class and placeholder
  const handleBlur = e => {
    const target = e.target;
    if (!target.value) {
      target.closest('.field').classList.remove('field--active');
    }
    target.removeAttribute('placeholder');
  };

  // register events
  const bindEvents = element => {
    const floatField = element.querySelector('.field__input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);
  };

  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.float-container');

    floatContainers.forEach(element => {
      if (element.querySelector('.field__input').value) {
        element.classList.add('field--active');
      }

      bindEvents(element);
    });
  };

  return {
    init: init
  };
})();
