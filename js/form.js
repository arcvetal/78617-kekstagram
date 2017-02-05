'use strict';

var uploadFile = document.querySelector('#upload-file');
var cropping = document.querySelector('.upload-overlay');
var download = document.querySelector('#upload-select-image');
var btnClose = cropping.querySelector('.upload-form-cancel');
var photo = cropping.querySelector('.filter-image-preview');
var filterControls = cropping.querySelector('.upload-filter-controls');

var scaleWindow = cropping.querySelector('.upload-resize-controls-value');
var resizeBtnIncr = cropping.querySelector('.upload-resize-controls-button-inc');
var resizeBtnDecr = cropping.querySelector('.upload-resize-controls-button-dec');

var filters = filterControls.querySelectorAll('input[name=upload-filter]');
var filterLabels = filterControls.querySelectorAll('.upload-filter-label');

function toggleFilter(event) {
  for (i = 0; i < filters.length; i++) {
    photo.classList.remove('filter-' + filters[i].value);
  }
  if (event.target.htmlFor) {
    var inputId = event.target.htmlFor;
    var filterInput = filterControls.querySelector('#' + inputId);
    photo.classList.add('filter-' + filterInput.value);
  } else {
    if (event.target.checked) {
      photo.classList.add('filter-' + event.target.value);
    }
  }
}

function makeTransform() {
  for (i = 1; i < 4; i++) {
    photo.classList.remove('transform' + 25 * i);
  }
  photo.classList.add('transform' + scaleWindow.value);
}

filterControls.addEventListener('click', function (event) {
  toggleFilter(event);
});

filterControls.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    var inputId = event.target.htmlFor;
    var filterInput = filterControls.querySelector('#' + inputId);
    filterInput.checked = true;
    toggleFilter(event);
  }
});

scaleWindow.setAttribute('value', 100);

//  Добавим фильтрам атрибут ТАБИНДЕКС!!!

filterControls.setAttribute('tabindex', '0');

for (var i = 0; i < filterLabels.length; i++) {
  setTabIndex(filterLabels[i], i);
}

function setTabIndex(filterLabel, n) {
  filterLabel.setAttribute('tabindex', 0);
}

resizeBtnDecr.addEventListener('click', function () {
  if (scaleWindow.value > 25) {
    scaleWindow.value = +scaleWindow.value - 25;
    makeTransform();
  }
});

resizeBtnIncr.addEventListener('click', function () {
  if (scaleWindow.value < 100) {
    scaleWindow.value = +scaleWindow.value + 25;
    makeTransform();
  }
});

uploadFile.addEventListener('click', function () {
  cropping.classList.remove('invisible');
  download.classList.add('invisible');
});

btnClose.addEventListener('click', function () {
  cropping.classList.add('invisible');
  download.classList.remove('invisible');
});
