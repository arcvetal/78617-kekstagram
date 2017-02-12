'use strict';

window.createScale = function (imagePreview, scale, step) {
  var scaleWindow = document.querySelector(scale);
  var photo = document.querySelector(imagePreview);

  function makeTransform() {
    for (var i = 1; i < 4; i++) {
      photo.classList.remove('transform' + step * i);
    }
    photo.classList.add('transform' + scaleWindow.value);
  }

  if (scaleWindow.value > 25) {
    scaleWindow.value = +scaleWindow.value - step;
    makeTransform();
  }

  if (scaleWindow.value < 100) {
    scaleWindow.value = +scaleWindow.value + step;
    makeTransform();
  }
};
