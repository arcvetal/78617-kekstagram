'use strict';

window.load(
    'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (e) {
      var pictures = JSON.parse(e.target.response);
      var templateElement = document.querySelector('#picture-template');
      var pictureFrame = templateElement.content.querySelector('.picture');
      var pictureContainer = document.querySelector('.pictures');
      var pictureFilters = document.querySelector('.filters');
      var picturesForRendering = [];
      var randomPictures = [];
      var reversedPictures = [];

      function sortArray(array) {
        array.sort(function (leftElement, rightElement) {
          return rightElement.commentsLength - leftElement.commentsLength;
        });
        return array;
      }

      pictures.forEach(function (pictureItem) {
        var picture = pictureFrame.cloneNode(true);
        var image = picture.querySelector('img');
        var comments = picture.querySelector('.picture-comments');
        var likes = picture.querySelector('.picture-likes');
        image.setAttribute('src', pictureItem.url);
        comments.textContent = pictureItem.comments.length;
        likes.textContent = pictureItem.likes;
        picture.setAttribute('tabindex', '0');
        picture.commentsLength = pictureItem.comments.length;
        picturesForRendering.push(picture);
        var pictureOptions = {
          link: pictureItem.url,
          likesCount: pictureItem.likes,
          commentsCount: pictureItem.comments.length
        };
        picture.addEventListener('click', function (event) {
          event.preventDefault();
          window.showGallery(pictureOptions);
        });
        pictureContainer.appendChild(picture);
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

      pictureFilters.addEventListener('click', function (event) {
        filterPicturesContainer(event);
      });

      pictureFilters.addEventListener('keydown', function (event) {
        if (window.helpers.isEnterKeyPressed(event)) {
          event.target.control.checked = true;
          filterPicturesContainer(event);
        }
      });
    });
