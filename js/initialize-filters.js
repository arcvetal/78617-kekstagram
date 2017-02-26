'use strict';

window.initializeFilters = (function () {
  return function (options) {

    var onFiltersClick = function (event) {
      options.callback(options.elementForFiltering, options.filters, options.blockOfFilters, event);
    };

    var onFiltersKeydown = function (event) {
      if (window.helpers.isEnterKeyPressed(event)) {
        options.callback(options.elementForFiltering, options.filters, options.blockOfFilters, event);
      }
    };

    options.blockOfFilters.addEventListener('click', onFiltersClick);

    options.blockOfFilters.addEventListener('keydown', onFiltersKeydown);
  };
})();
