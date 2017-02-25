'use strict';

window.initializeFilters = (function () {
  return function (options) {
    options.blockOfFilters.addEventListener('click', function (event) {
      options.callback(options.elementForFiltering, options.filters, options.blockOfFilters, event);
    });

    options.blockOfFilters.addEventListener('keydown', function (event) {
      if (window.helpers.isEnterKeyPressed(event)) {
        options.callback(options.elementForFiltering, options.filters, options.blockOfFilters, event);
      }
    });
  };
})();
