'use strict';

(function () {
  window.load(
      'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
      function (evt) {
        var pictures = JSON.parse(evt.target.response);
        var templateElement = document.querySelector('#picture-template');
        var pictureFrame = templateElement.content.querySelector('.picture');
        var pictureContainer = document.querySelector('.pictures');
        var pictureFilters = document.querySelector('.filters');
        var picturesForRendering = [];
        var randomPictures = [];
        var reversedPictures = [];

        var onPictureFiltersClick = function (event) {
          filterPicturesContainer(event);
        };

        var onPictureFiltersKeydown = function (event) {
          if (window.helpers.isEnterKeyPressed(event)) {
            event.target.control.checked = true;
            filterPicturesContainer(event);
          }
        };

        function sortArray(array) {
          array.sort(function (leftElement, rightElement) {
            return rightElement.commentsLength - leftElement.commentsLength;
          });
          return array;
        }

        var createPicture = function (option) {
          var picture = pictureFrame.cloneNode(true);
          var image = picture.querySelector('img');
          var comments = picture.querySelector('.picture-comments');
          var likes = picture.querySelector('.picture-likes');
          image.setAttribute('src', option.url);
          comments.textContent = option.comments.length;
          likes.textContent = option.likes;
          picture.setAttribute('tabindex', '0');
          picture.commentsLength = option.comments.length;
          return picture;
        };

        var addListenerToShowGallery = function (options, element) {
          var pictureOptions = {
            link: options.url,
            likesCount: options.likes,
            commentsCount: options.comments.length
          };
          element.addEventListener('click', function (event) {
            event.preventDefault();
            window.showGallery(pictureOptions);
          });
        };

        pictures.forEach(function (pictureItem) {
          var newPicture = createPicture(pictureItem);
          picturesForRendering.push(newPicture);
          pictureContainer.appendChild(newPicture);
          addListenerToShowGallery(pictureItem, newPicture);
        });

        function filterPicturesContainer(event) {
          switch (event.target.htmlFor) {
            case ('filter-popular'):
              window.helpers.cleanContainer(pictureContainer);
              picturesForRendering.forEach(function (picture) {
                pictureContainer.appendChild(picture);
              });
              break;
            case ('filter-new'):
              window.helpers.cleanContainer(pictureContainer);
              randomPictures = window.helpers.getRandomArrayFromArray(picturesForRendering.slice(0), 10);
              randomPictures.forEach(function (picture) {
                pictureContainer.appendChild(picture);
              });
              break;
            case ('filter-discussed'):
              window.helpers.cleanContainer(pictureContainer);
              reversedPictures = sortArray(picturesForRendering.slice(0));
              reversedPictures.forEach(function (picture) {
                pictureContainer.appendChild(picture);
              });
              break;
          }
        }

        pictureFilters.classList.remove('hidden');

        pictureFilters.addEventListener('click', onPictureFiltersClick);

        pictureFilters.addEventListener('keydown', onPictureFiltersKeydown);
      });
})();
