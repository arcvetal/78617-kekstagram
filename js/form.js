'use strict';

var uploadFile = document.querySelector('#upload-file');
var cropping = document.querySelector('.upload-overlay');
var download = document.querySelector('#upload-select-image');
var btnClose = document.querySelector('.upload-form-cancel');
var photo = document.querySelector('.filter-image-preview');

var scaleWindow = document.querySelector('.upload-resize-controls-value');
var resizeBtnIncr = document.querySelector('.upload-resize-controls-button-inc');
var resizeBtnDecr = document.querySelector('.upload-resize-controls-button-dec');

var filters = document.querySelectorAll('input[name=upload-filter]');

for (var i = 0; i < filters.length; i++) {
  clickFilter(filters[i]);
}

function clickFilter(filter) {
  filter.addEventListener('click', function () {
    toggleFilter(filter);
  });
}

function toggleFilter(filter) {
  for (i = 0; i < filters.length; i++) {
    photo.classList.remove('filters[i].id.slice(7)');
  }

  photo.classList.add('filter.id.slice(7)');
}

scaleWindow.setAttribute('value', 100);

function makeTransform() {
  for (i = 1; i < 4; i++) {
    photo.classList.remove('transform' + 25 * i);
  }

  photo.classList.add('transform' + scaleWindow.value);
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
