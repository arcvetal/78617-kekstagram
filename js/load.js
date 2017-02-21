'use strict';

window.load = (function () {

  return function load(url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad);
    xhr.open('GET', url);
    xhr.send();
  };

})();
