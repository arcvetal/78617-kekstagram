'use strict';

var uploadFile = document.querySelector('#upload-file');
var cropping = document.querySelector('.upload-overlay');
var download = document.querySelector('#upload-select-image');
var btnClose = cropping.querySelector('.upload-form-cancel');
var photo = cropping.querySelector('.filter-image-preview');
var filterWrapper = document.querySelector('.upload-filter-controls');
var photoFilters = document.querySelectorAll('input[name=upload-filter]');
var scaleBlock = document.querySelector('.upload-resize-controls-value');

var ESC_KEY_CODE = 27;

function toggleDialogWindow(show, hide) {
  hide.classList.add('invisible');
  show.classList.remove('invisible');
}

window.makeTransform = function () {
  if (scaleBlock.value <= 100 && scaleBlock.value >= 25) {
    photo.setAttribute('style', 'transform: scale(' + scaleBlock.value / 100 + ')');
  }
};

function resetScale() {
  photo.removeAttribute('style');
  scaleBlock.value = 100;
}

window.toggleFilter = function () {
  var inputId;
  var filterInput;

  for (var i = 0; i < photoFilters.length; i++) {
    photo.classList.remove('filter-' + photoFilters[i].value);
  }
  if (event.target.htmlFor) {
    inputId = event.target.htmlFor;
    filterInput = filterWrapper.querySelector('#' + inputId);
    filterInput.checked = true;
    photo.classList.add('filter-' + filterInput.value);
  } else if (event.target.checked) {
    photo.classList.add('filter-' + event.target.value);
  }
};

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
