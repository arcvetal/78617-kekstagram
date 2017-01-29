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

var resizeWindow = document.querySelector('.upload-resize-controls-value');
var resizeBtnIncr = document.querySelector('.upload-resize-controls-button-inc');
var resizeBtnDecr = document.querySelector('.upload-resize-controls-button-dec');


resizeWindow.setAttribute('value', 100);
var valueWindow = resizeWindow.getAttribute('value');

resizeBtnDecr.addEventListener('click', function () {
  if (valueWindow === 100) {
    resizeWindow.setAttribute('value', 75);
  }
});

resizeBtnDecr.addEventListener('click', function () {
  if (valueWindow === 75) {
    resizeWindow.setAttribute('value', 50);
  }
});

resizeBtnDecr.addEventListener('click', function () {
  if (valueWindow === 50) {
    resizeWindow.setAttribute('value', 25);
  }
});


resizeBtnIncr.addEventListener('click', function () {
  if (valueWindow === 75) {
    resizeWindow.setAttribute('value', 100);
  }
});
// console.log(typeof valueWindow);

// console.log(filterChrome);
uploadFile.addEventListener('click', function () {
  cropping.classList.remove('invisible');
  download.classList.add('invisible');
});

btnClose.addEventListener('click', function () {
  cropping.classList.add('invisible');
  download.classList.remove('invisible');
});

filterNone.addEventListener('click', function () {
  imgPreview.classList.remove('filter-chrome');
  imgPreview.classList.remove('filter-sepia');
  imgPreview.classList.remove('filter-marvin');
  imgPreview.classList.remove('filter-phobos');
  imgPreview.classList.remove('filter-heat');
});

filterChrome.addEventListener('click', function () {
  imgPreview.classList.add('filter-chrome');
  imgPreview.classList.remove('filter-sepia');
  imgPreview.classList.remove('filter-marvin');
  imgPreview.classList.remove('filter-phobos');
  imgPreview.classList.remove('filter-heat');
});

filterSepia.addEventListener('click', function () {
  imgPreview.classList.add('filter-sepia');
  imgPreview.classList.remove('filter-chrome');
  imgPreview.classList.remove('filter-marvin');
  imgPreview.classList.remove('filter-phobos');
  imgPreview.classList.remove('filter-heat');
});

filterMarvin.addEventListener('click', function () {
  imgPreview.classList.add('filter-marvin');
  imgPreview.classList.remove('filter-chrome');
  imgPreview.classList.remove('filter-sepia');
  imgPreview.classList.remove('filter-phobos');
  imgPreview.classList.remove('filter-heat');
});

filterPhobos.addEventListener('click', function () {
  imgPreview.classList.add('filter-phobos');
  imgPreview.classList.remove('filter-chrome');
  imgPreview.classList.remove('filter-sepia');
  imgPreview.classList.remove('filter-marvin');
  imgPreview.classList.remove('filter-heat');
});

filterHeat.addEventListener('click', function () {
  imgPreview.classList.add('filter-heat');
  imgPreview.classList.remove('filter-chrome');
  imgPreview.classList.remove('filter-sepia');
  imgPreview.classList.remove('filter-marvin');
  imgPreview.classList.remove('filter-phobos');
});
