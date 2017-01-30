'use strict';

var uploadFile = document.querySelector('#upload-file');
var cropping = document.querySelector('.upload-overlay');
var download = document.querySelector('#upload-select-image');
var btnClose = document.querySelector('.upload-form-cancel');
var imgPreview = document.querySelector('.filter-image-preview');

var filterNone = document.querySelector('#upload-filter-none');
var filterChrome = document.querySelector('#upload-filter-chrome');
var filterSepia = document.querySelector('#upload-filter-sepia');
var filterMarvin = document.querySelector('#upload-filter-marvin');
var filterPhobos = document.querySelector('#upload-filter-phobos');
var filterHeat = document.querySelector('#upload-filter-heat');

var scaleWindow = document.querySelector('.upload-resize-controls-value');
var resizeBtnIncr = document.querySelector('.upload-resize-controls-button-inc');
var resizeBtnDecr = document.querySelector('.upload-resize-controls-button-dec');

function zoom() {
  if (+scaleWindow.value === 75) {
    imgPreview.style.transform = 'scale(0.75)';
  } else if (+scaleWindow.value === 50) {
    imgPreview.style.transform = 'scale(0.5)';
  } else if (+scaleWindow.value === 25) {
    imgPreview.style.transform = 'scale(0.25)';
  } else {
    imgPreview.style.transform = 'scale(1)';
  }
}

function deleteFilters() {
  imgPreview.classList.remove('filter-chrome');
  imgPreview.classList.remove('filter-sepia');
  imgPreview.classList.remove('filter-marvin');
  imgPreview.classList.remove('filter-phobos');
  imgPreview.classList.remove('filter-heat');
}

scaleWindow.setAttribute('value', 100);
imgPreview.setAttribute('transform', 'scale(1)');

// console.log();

resizeBtnDecr.addEventListener('click', function () {
  if (scaleWindow.value > 25) {
    scaleWindow.value = (scaleWindow.value - 25);
    zoom();
  }
});


resizeBtnIncr.addEventListener('click', function () {
  if (scaleWindow.value < 100) {
    scaleWindow.value = (+scaleWindow.value + 25);
    zoom();
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

filterNone.addEventListener('click', function () {
  deleteFilters();
});

filterChrome.addEventListener('click', function () {
  deleteFilters();
  imgPreview.classList.add('filter-chrome');
});

filterSepia.addEventListener('click', function () {
  deleteFilters();
  imgPreview.classList.add('filter-sepia');
});

filterMarvin.addEventListener('click', function () {
  deleteFilters();
  imgPreview.classList.add('filter-marvin');
});

filterPhobos.addEventListener('click', function () {
  deleteFilters();
  imgPreview.classList.add('filter-phobos');
});

filterHeat.addEventListener('click', function () {
  deleteFilters();
  imgPreview.classList.add('filter-heat');
});
