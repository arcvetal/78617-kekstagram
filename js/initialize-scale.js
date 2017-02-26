'use strict';

window.initializeScale = (function () {
  function scaleElement(options, event) {
    var scaleValue = options.resizeControls.value;
    if (event.isIncremented === true && scaleValue < options.resizeUpperLimit) {
      options.resizeControls.value = +scaleValue + options.resizeStep;
    } else if (event.isDecremented === true && scaleValue > options.resizeLowerLimit) {
      options.resizeControls.value = +scaleValue - options.resizeStep;
    }
    options.callback(options.elementForScaling);
  }

  return function (options) {
    var onBtnIncrclick = function (event) {
      event.isIncremented = true;
      event.isDecremented = false;
      scaleElement(options, event);
    };

    var onBtnDecrClick = function (event) {
      event.isIncremented = false;
      event.isDecremented = true;
      scaleElement(options, event);
    };

    options.btnIncr.addEventListener('click', onBtnIncrclick);

    options.btnDecr.addEventListener('click', onBtnDecrClick);
  };
})();
