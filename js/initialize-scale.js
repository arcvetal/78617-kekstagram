'use strict';

window.initializeScale = (function () {

  return function makeTransform(imagePreview, scale, scaleStep) {
    for (var i = 1; i < 4; i++) {
      imagePreview.classList.remove('transform' + scaleStep * i);
    }
    imagePreview.classList.add('transform' + scale.value);
    imagePreview.classList.remove('transform100');
  };

  // resizeBtnIncr.addEventListener('click', function () {
  //   if (scale.value < 100) {
  //     scale.value = +scale.value + scaleStep;
  //     makeTransform();
  //   }
  // });
  //
  // resizeBtnDecr.addEventListener('click', function () {
  //   if (scale.value > 25) {
  //     scale.value = +scale.value - scaleStep;
  //     makeTransform();
  //   }
  // });
})();
