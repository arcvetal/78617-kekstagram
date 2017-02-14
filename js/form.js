'use strict';

var uploadFile = document.querySelector('#upload-file');
var cropping = document.querySelector('.upload-overlay');
var download = document.querySelector('#upload-select-image');
var btnClose = cropping.querySelector('.upload-form-cancel');
var photo = cropping.querySelector('.filter-image-preview');
var filterWrapper = cropping.querySelector('.upload-filter-controls');
var photoFilters = document.querySelectorAll('input[name=upload-filter]');
var scaleBlock = document.querySelector('.upload-resize-controls-value');

var ESC_KEY_CODE = 27;

function toggleDialogWindow(show, hide) {
  hide.classList.add('invisible');
  show.classList.remove('invisible');
}

function resetScale() {
  for (var i = 1; i < 4; i++) {
    photo.classList.remove('transform' + 25 * i);
  }
  scaleBlock.value = 100;
}

function resetFilters() {
  for (var i = 0; i < photoFilters.length; i++) {
    photo.classList.remove('filter-' + photoFilters[i].value);
  }
  photoFilters[0].checked = true;
}

function setAriaVisibility() {
  if (!cropping.classList.contains('invisible')) {
    cropping.setAttribute('aria-hidden', 'false');
  } else {
    cropping.setAttribute('aria-hidden', 'true');
  }
}

window.initializeFilters(photo, filterWrapper, photoFilters);

window.initializeScale(photo, scaleBlock, 25);

uploadFile.addEventListener('click', function () {
  toggleDialogWindow(cropping, download);
  setAriaVisibility();
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEY_CODE) {
      toggleDialogWindow(download, cropping);
      resetScale();
      resetFilters();
      setAriaVisibility();
    }
  });
});

btnClose.addEventListener('click', function () {
  toggleDialogWindow(download, cropping);
  resetScale();
  resetFilters();
  setAriaVisibility();
});
