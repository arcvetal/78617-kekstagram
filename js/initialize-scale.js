'use strict';

window.initializeScale = (function () {

  function scaleElement(prmScale, prmScaleStep, prmUpLimit, prmLowLimit, event) {
    var scaleValue = prmScale.value;
    if (event.isIncremented === true && scaleValue < prmUpLimit) {
      prmScale.value = +scaleValue + prmScaleStep;
    } else if (event.isDecremented === true && scaleValue > prmLowLimit) {
      prmScale.value = +scaleValue - prmScaleStep;
    }
  }

  return function (params) {
    params.btnIncr.addEventListener('click', function (event) {
      event.isIncremented = true;
      event.isDecremented = false;
      scaleElement(params.scale, params.scaleStep, params.uppperLimit, params.lowerLimit, event);
      params.callback(params.image);
    });

    params.btnDecr.addEventListener('click', function (event) {
      event.isIncremented = false;
      event.isDecremented = true;
      scaleElement(params.scale, params.scaleStep, params.uppperLimit, params.lowerLimit, event);
      params.callback(params.image);
    });
  };
})();
