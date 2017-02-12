'use strict';

window.initializeFilters = function (imagePreview, blockOfFilters, filtersArr) {
  var image = imagePreview;
  var wrapperOfFilters = blockOfFilters;
  var filters = filtersArr;
  var inputId;
  var filterInput;

  function toggleFilter(event) {
    for (var i = 0; i < filters.length; i++) {
      image.classList.remove('filter-' + filters[i].value);
    }
    if (event.target.htmlFor) {
      inputId = event.target.htmlFor;
      filterInput = wrapperOfFilters.querySelector('#' + inputId);
      image.classList.add('filter-' + filterInput.value);
    } else if (event.target.checked) {
      image.classList.add('filter-' + event.target.value);
    }
  }
};
