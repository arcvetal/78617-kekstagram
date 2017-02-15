'use strict';

window.initializeFilters = (function (image, wrapperOfFilters, filters) {

  var inputId;
  var filterInput;
  // console.log(image);
  // console.log(wrapperOfFilters);
  // console.log(filters);

  return function toggleFilter() {
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
  };
})();

// console.log(window.initializeFilters);
