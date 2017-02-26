'use strict';

(function () {
  var fileInput = document.querySelector('#upload-file');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var downloadForm = document.querySelector('#upload-select-image');
  var btnCloseForm = uploadOverlay.querySelector('.upload-form-cancel');
  var photoPreview = uploadOverlay.querySelector('.filter-image-preview');
  var photoFilters = document.querySelectorAll('input[name=upload-filter]');
  var resizeBlock = document.querySelector('.upload-resize-controls-value');
  var defaultScaleBlockValue = 100;
  var i;
  var arrayLength;

  var scaleOptions = {
    btnIncr: document.querySelector('.upload-resize-controls-button-inc'),
    btnDecr: document.querySelector('.upload-resize-controls-button-dec'),
    resizeUpperLimit: 100,
    resizeLowerLimit: 25,
    resizeControls: resizeBlock,
    resizeStep: 25,
    elementForScaling: photoPreview,
    callback: function (elementForScaling) {
      elementForScaling.setAttribute('style', 'transform: scale(' + resizeBlock.value / this.resizeUpperLimit + ')');
    }
  };

  var filtersOptions = {
    blockOfFilters: document.querySelector('.upload-filter-controls'),
    elementForFiltering: photoPreview,
    filters: photoFilters,
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
  };

  var onDocumentKeydown = function (event) {
    if (window.helpers.isEscapeKeyPressed(event)) {
      window.helpers.showElement(downloadForm);
      window.helpers.hideElement(uploadOverlay);
      resetScale();
      resetFilters();
      window.helpers.setAriaHiddenAttribute(uploadOverlay);

      document.removeEventListener('keydown', onDocumentKeydown);
      fileInput.addEventListener('change', onFileInputChange);
    }
  };

  var onFileInputChange = function () {
    window.helpers.showElement(uploadOverlay);
    window.helpers.hideElement(downloadForm);
    window.helpers.setAriaHiddenAttribute(uploadOverlay);

    document.addEventListener('keydown', onDocumentKeydown);
    btnCloseForm.addEventListener('click', onBntCloseClick);
  };

  var onBntCloseClick = function () {
    window.helpers.showElement(downloadForm);
    window.helpers.hideElement(uploadOverlay);
    resetScale();
    resetFilters();
    window.helpers.setAriaHiddenAttribute(uploadOverlay);

    btnCloseForm.removeEventListener('click', onBntCloseClick);
    fileInput.addEventListener('change', onFileInputChange);
  };

  function resetScale() {
    photoPreview.removeAttribute('style');
    resizeBlock.value = defaultScaleBlockValue;
  }

  function resetFilters() {
    for (i = 0, arrayLength = photoFilters.length; i < arrayLength; i++) {
      photoPreview.classList.remove('filter-' + photoFilters[i].value);
    }
    photoFilters[0].checked = true;
  }

  resetScale();

  resetFilters();

  fileInput.addEventListener('change', onFileInputChange);

  window.initializeScale(scaleOptions);

  window.initializeFilters(filtersOptions);
})();
