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
    options.btnIncr.addEventListener('click', function (event) {
      event.isIncremented = true;
      event.isDecremented = false;
      scaleElement(options, event);
    });

    options.btnDecr.addEventListener('click', function (event) {
      event.isIncremented = false;
      event.isDecremented = true;
      scaleElement(options, event);
    });
  };
})();
