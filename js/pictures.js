'use strict';

window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (e) {
      var pictures = [];
      pictures = JSON.parse(e.target.response);

      var templateElement = document.querySelector('#picture-template');
      var pictureClone = templateElement.content.querySelector('.picture');
      var pictureContainer = document.querySelector('.pictures');
      var previewFilters = document.querySelector('.filters');
      var pictureArrCommented = cloneArray(pictures);
      var pictureArrNew = cloneArray(pictures);

      var cloneArray = function (oldArr) {
        var newArr = [];
        for (var i = 0; i < oldArr.length; i++) {
          newArr.push(oldArr[i]);
        }
        return newArr;
      };

      var sortByMostCommented = function (element) {
        element.sort(function (left, right) {
          return right.comments.length - left.comments.length;
        });
      };

      var shuffle = (function () {
        function random(min, max) {
          var range = max - min + 1;
          return Math.floor(Math.random() * range) + min;
        }

        return function (arr) {
          for (var i = 0; i < arr.length - 1; i++) {
            var randomItem = random(0, arr.length - 1);
            var v = arr[randomItem];
            arr[randomItem] = arr[arr.length - 1];
            arr[arr.length - 1] = v;
          }
          return arr;
        };
      })();

      var cleanGellery = function () {
        while (pictureContainer.firstChild) {
          pictureContainer.removeChild(pictureContainer.firstChild);
        }
      };

      var showGallery = function (element) {
        element.forEach(function (pictureItem) {
          var picture = pictureClone.cloneNode(true);
          var image = picture.querySelector('img');
          var comments = picture.querySelector('.picture-comments');
          var likes = picture.querySelector('.picture-likes');
          image.setAttribute('src', pictureItem.url);
          comments.textContent = pictureItem.comments.length;
          likes.textContent = pictureItem.likes;
          pictureContainer.appendChild(picture);
          var pictureBlock = {
            link: pictureItem.url,
            likesCount: pictureItem.likes,
            commentsCount: pictureItem.comments.length
          };
          picture.addEventListener('click', function (evt) {
            evt.preventDefault();
            window.showGallery(pictureBlock);
          });
        });
      };


      previewFilters.classList.remove('hidden');

      showGallery(pictures);

      previewFilters.addEventListener('click', function (ev) {
        if (ev.target.htmlFor === 'filter-popular') {
          cleanGellery();
          showGallery(pictures);
        }
      });

      previewFilters.addEventListener('click', function (ev) {
        if (ev.target.htmlFor === 'filter-new') {
          cleanGellery();
          var mixedArray = shuffle(pictureArrNew);
          mixedArray.length = 10;
          showGallery(mixedArray);
        }
      });

      previewFilters.addEventListener('click', function (ev) {
        if (ev.target.htmlFor === 'filter-discussed') {
          cleanGellery();
          sortByMostCommented(pictureArrCommented);
          showGallery(pictureArrCommented);
        }
      });
    });
