'use strict';

(function (scale, scaleStep, changeScale) {

  var resizeBtnIncr = document.querySelector('.upload-resize-controls-button-inc');
  var resizeBtnDecr = document.querySelector('.upload-resize-controls-button-dec');

  var UPPER_LIMIT = 100;
  var LOWER_LIMIT = 25;

  resizeBtnIncr.addEventListener('click', function () {
    if (scale.value < UPPER_LIMIT) {
      scale.value = +scale.value + scaleStep;
      changeScale();
    }
  });

  resizeBtnDecr.addEventListener('click', function () {
    if (scale.value > LOWER_LIMIT) {
      scale.value = +scale.value - scaleStep;
      changeScale();
    }
  });
})(window.scaleBlock, 25, window.makeTransform);
