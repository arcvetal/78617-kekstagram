'use strict';

window.createScale = function (btnIncr, btnDecr, imagePreview, scale) {
  var scaleWindow = document.querySelector(scale);
  var photo = document.querySelector(imagePreview);

  var resizeBtnIncr = document.querySelector(btnIncr);
  var resizeBtnDecr = document.querySelector(btnDecr);

  function makeTransform() {
    for (var i = 1; i < 4; i++) {
      photo.classList.remove('transform' + 25 * i);
    }
    photo.classList.add('transform' + scaleWindow.value);
  }

  resizeBtnIncr.addEventListener('click', function () {
    if (scaleWindow.value < 100) {
      scaleWindow.value = +scaleWindow.value + 25;
      makeTransform();
    }
  });

  resizeBtnDecr.addEventListener('click', function () {
    if (scaleWindow.value > 25) {
      scaleWindow.value = +scaleWindow.value - 25;
      makeTransform();
    }
  });
};
