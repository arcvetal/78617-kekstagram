'use strict';

(function (image, filters, blockOfFilters, changeFilter) {

  var ENTER_KEY_CODE = 13;

  blockOfFilters.addEventListener('click', function (event) {
    changeFilter();
  });


  blockOfFilters.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      changeFilter();
    }
  });
})(window.photo, window.photoFilters, window.filterWrapper, window.toggleFilter);
