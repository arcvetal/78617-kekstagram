'use strict';

(function (scale, image, scaleStep) {

  var resizeBtnIncr = document.querySelector('.upload-resize-controls-button-inc');
  var resizeBtnDecr = document.querySelector('.upload-resize-controls-button-dec');

  function makeTransform() {
    if (scale.value <= 100 && scale.value >= 25) {
      image.setAttribute('style', 'transform: scale(' + scale.value / 100 + ')');
    }
  }

  resizeBtnIncr.addEventListener('click', function () {
    if (scale.value < 100) {
      scale.value = +scale.value + scaleStep;
      makeTransform();
    }
  });

  resizeBtnDecr.addEventListener('click', function () {
    if (scale.value > 25) {
      scale.value = +scale.value - scaleStep;
      makeTransform();
    }
  });
})(window.scaleBlock, window.photo, 25);
