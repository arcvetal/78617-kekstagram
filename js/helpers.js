'use strict';

window.helpers = (function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;
  return {
    isEnterKeyPressed: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },
    isEscapeKeyPressed: function (evt) {
      return evt.keyCode && evt.keyCode === ESC_KEY_CODE;
    },
    showElement: function (visibleElement) {
      visibleElement.classList.remove('invisible');
    },
    hideElement: function (invisibleElement) {
      invisibleElement.classList.add('invisible');
    },
    setAriaHiddenAttribute: function (element) {
      if (!element.classList.contains('invisible')) {
        element.setAttribute('aria-hidden', 'false');
      } else {
        element.setAttribute('aria-hidden', 'true');
      }
    },
    cleanContainer: function (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    },
    getRandomArrayFromArray: function (array, n) {
      var randomArray = new Array(n);
      var length = array.length;
      var taken = new Array(length);
      if (n > length) {
        throw new RangeError('getRandom: more elements taken than available');
      }
      while (n--) {
        var x = Math.floor(Math.random() * length);
        randomArray[n] = array[x in taken ? taken[x] : x];
        taken[x] = --length;
      }
      return randomArray;
    }
  };
})();
