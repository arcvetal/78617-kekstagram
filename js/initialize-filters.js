'use strict';

(function (image, filters) {

  var filterWrapper = document.querySelector('.upload-filter-controls');
  var ENTER_KEY_CODE = 13;
  var inputId;
  var filterInput;

  function toggleFilter() {
    for (var i = 0; i < filters.length; i++) {
      image.classList.remove('filter-' + filters[i].value);
    }
    if (event.target.htmlFor) {
      inputId = event.target.htmlFor;
      filterInput = filterWrapper.querySelector('#' + inputId);
      filterInput.checked = true;
      image.classList.add('filter-' + filterInput.value);
    } else if (event.target.checked) {
      image.classList.add('filter-' + event.target.value);
    }
  }

  filterWrapper.addEventListener('click', function (event) {
    toggleFilter();
  });


  filterWrapper.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      toggleFilter();
    }
  });
})(window.photo, window.photoFilters);
