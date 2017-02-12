'use strict';

var uploadFile = document.querySelector('#upload-file');
var cropping = document.querySelector('.upload-overlay');
var download = document.querySelector('#upload-select-image');
var btnClose = cropping.querySelector('.upload-form-cancel');
var photo = cropping.querySelector('.filter-image-preview');
var filterWrapper = cropping.querySelector('.upload-filter-controls');

// var scaleWindow = cropping.querySelector('.upload-resize-controls-value');
var resizeBtnIncr = cropping.querySelector('.upload-resize-controls-button-inc');
var resizeBtnDecr = cropping.querySelector('.upload-resize-controls-button-dec');

// var filters = filterWrapper.querySelectorAll('input[name=upload-filter]');

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

// function toggleFilter(event) {
//   for (var i = 0; i < filters.length; i++) {
//     photo.classList.remove('filter-' + filters[i].value);
//   }
//   if (event.target.htmlFor) {
//     var inputId = event.target.htmlFor;
//     var filterInput = filterWrapper.querySelector('#' + inputId);
//     photo.classList.add('filter-' + filterInput.value);
//   } else {
//     if (event.target.checked) {
//       photo.classList.add('filter-' + event.target.value);
//     }
//   }
// }
//
// function makeTransform() {
//   for (var i = 1; i < 4; i++) {
//     photo.classList.remove('transform' + 25 * i);
//   }
//   photo.classList.add('transform' + scaleWindow.value);
// }

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

filterWrapper.addEventListener('click', function (event) {
  window.initializeFilters(photo, filterWrapper, document.querySelectorAll('input[name=upload-filter]'));
});

filterWrapper.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEY_CODE) {
    var inputId = event.target.htmlFor;
    var filterInput = filterWrapper.querySelector('#' + inputId);
    filterInput.checked = true;
    window.initializeFilters(photo, filterWrapper, document.querySelectorAll('input[name=upload-filter]'));
  }
});

resizeBtnDecr.addEventListener('click', function () {

  window.createScale('.filter-image-preview', '.upload-resize-controls-value', 25);
  // if (scaleWindow.value > 25) {
  //   scaleWindow.value = +scaleWindow.value - 25;
  //   makeTransform();
  // }
});

resizeBtnIncr.addEventListener('click', function () {

  window.createScale('.filter-image-preview', '.upload-resize-controls-value', 25);
  // if (scaleWindow.value < 100) {
  //   scaleWindow.value = +scaleWindow.value + 25;
  //   makeTransform();
  // }
});

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
