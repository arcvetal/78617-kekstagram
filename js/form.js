'use strict';

(function () {
  var uploadFile = document.querySelector('#upload-file');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var download = document.querySelector('#upload-select-image');
  var btnClose = uploadOverlay.querySelector('.upload-form-cancel');
  var photo = uploadOverlay.querySelector('.filter-image-preview');
  var photoFilters = document.querySelectorAll('input[name=upload-filter]');
  var scaleBlock = document.querySelector('.upload-resize-controls-value');
  var i;
  var arrayLength;

  function resetScale() {
    photo.removeAttribute('style');
    scaleBlock.value = 100;
  }

  function resetFilters() {
    for (i = 0, arrayLength = photoFilters.length; i < arrayLength; i++) {
      photo.classList.remove('filter-' + photoFilters[i].value);
    }
    photoFilters[0].checked = true;
  }

  resetScale();

  resetFilters();

  uploadFile.addEventListener('change', function () {
    window.helpers.showElement(uploadOverlay);
    window.helpers.hideElement(download);
    window.helpers.setAriaHiddenAttribute(uploadOverlay);
    document.addEventListener('keydown', function (event) {
      if (window.helpers.isEscapeKeyPressed(event)) {
        window.helpers.showElement(download);
        window.helpers.hideElement(uploadOverlay);
        resetScale();
        resetFilters();
        window.helpers.setAriaHiddenAttribute(uploadOverlay);
      }
    });
  });

  btnClose.addEventListener('click', function () {
    window.helpers.showElement(download);
    window.helpers.hideElement(uploadOverlay);
    resetScale();
    resetFilters();
    window.helpers.setAriaHiddenAttribute(uploadOverlay);
  });

  window.initializeScale({
    btnIncr: document.querySelector('.upload-resize-controls-button-inc'),
    btnDecr: document.querySelector('.upload-resize-controls-button-dec'),
    resizeUpperLimit: 100,
    resizeLowerLimit: 25,
    resizeControls: document.querySelector('.upload-resize-controls-value'),
    resizeStep: 25,
    elementForScaling: document.querySelector('.filter-image-preview'),
    callback: function (elementForScaling) {
      elementForScaling.setAttribute('style', 'transform: scale(' + scaleBlock.value / 100 + ')');
    },
  });

  window.initializeFilters({
    blockOfFilters: document.querySelector('.upload-filter-controls'),
    ENTER_KEY_CODE: 13,
    elementForFiltering: document.querySelector('.filter-image-preview'),
    filters: document.querySelectorAll('input[name=upload-filter]'),
    callback: function (elementForFiltering, filters, blockOfFilters, event) {
      var filterInput;
      for (i = 0, arrayLength = filters.length; i < filters.length; i++) {
        elementForFiltering.classList.remove('filter-' + filters[i].value);
      }
      if (event.target.tagName === 'LABEL') {
        filterInput = blockOfFilters.querySelector('#' + event.target.htmlFor);
        filterInput.checked = true;
        elementForFiltering.classList.add('filter-' + filterInput.value);
      } else if (event.target.checked) {
        elementForFiltering.classList.add('filter-' + event.target.value);
      }
    }
  });
})();
