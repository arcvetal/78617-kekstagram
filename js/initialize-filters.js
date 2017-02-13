'use strict';

window.initializeFilters = function (imagePreview, blockOfFilters, filtersArr) {

  var image = imagePreview;
  var wrapperOfFilters = blockOfFilters;
  var filters = filtersArr;
  var inputId;
  var filterInput;
  var ENTER_KEY_CODE = 13;

  function toggleFilter() {
    for (var i = 0; i < filters.length; i++) {
      image.classList.remove('filter-' + filters[i].value);
    }
    if (event.target.htmlFor) {
      inputId = event.target.htmlFor;
      filterInput = wrapperOfFilters.querySelector('#' + inputId);
      filterInput.checked = true;
      image.classList.add('filter-' + filterInput.value);
    } else if (event.target.checked) {
      image.classList.add('filter-' + event.target.value);
    }
  }

  wrapperOfFilters.addEventListener('click', function (event) {
    toggleFilter();
  });

  wrapperOfFilters.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      toggleFilter();
    }
  });
};
