'use strict';

var uploadFile = document.querySelector('#upload-file');
var cropping = document.querySelector('.upload-overlay');
var download = document.querySelector('#upload-select-image');
var btnClose = cropping.querySelector('.upload-form-cancel');
var photo = cropping.querySelector('.filter-image-preview');
var filterWrapper = cropping.querySelector('.upload-filter-controls');

var ESC_KEY_CODE = 27;

function closeDialogWindow() {
  cropping.classList.add('invisible');
  download.classList.remove('invisible');
}

function setAriaVisibility() {
  if (!cropping.classList.contains('invisible')) {
    cropping.setAttribute('aria-hidden', 'false');
  } else {
    cropping.setAttribute('aria-hidden', 'true');
  }
}

window.initializeFilters(photo, filterWrapper, document.querySelectorAll('input[name=upload-filter]'));

window.createScale('.upload-resize-controls-button-inc', '.upload-resize-controls-button-dec', '.filter-image-preview', '.upload-resize-controls-value');

uploadFile.addEventListener('click', function () {
  cropping.classList.remove('invisible');
  download.classList.add('invisible');
  setAriaVisibility();
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEY_CODE) {
      closeDialogWindow();
      setAriaVisibility();
    }
  });
});

btnClose.addEventListener('click', function () {
  closeDialogWindow();
  setAriaVisibility();
});
