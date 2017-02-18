'use strict';

window.initializeFilters = (function () {
  return function (params) {
    params.blockOfFilters.addEventListener('click', function (event) {
      params.callback(params.image, params.filters, params.blockOfFilters);
    });

    params.blockOfFilters.addEventListener('keydown', function (event) {
      if (event.keyCode === params.enterKeyCode) {
        params.callback(params.image, params.filters, params.blockOfFilters);
      }
    });
  };
})();
