'use strict';

window.load(
    'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (e) {

      var pictures = JSON.parse(e.target.response);
      var templateElement = document.querySelector('#picture-template');
      var pictureFrame = templateElement.content.querySelector('.picture');
      var pictureContainer = document.querySelector('.pictures');
      var pictureFilters = document.querySelector('.filters');
      var pictureArrayCommented = pictures.slice(0);

      var renderPictures = function (pictureArray) {
        window.helpers.cleanContainer(pictureContainer);
        pictureArray.forEach(function (pictureItem) {
          var picture = pictureFrame.cloneNode(true);
          var image = picture.querySelector('img');
          var comments = picture.querySelector('.picture-comments');
          var likes = picture.querySelector('.picture-likes');
          image.setAttribute('src', pictureItem.url);
          comments.textContent = pictureItem.comments.length;
          likes.textContent = pictureItem.likes;
          picture.setAttribute('tabindex', '0');
          pictureContainer.appendChild(picture);
          var pictureOptions = {
            link: pictureItem.url,
            likesCount: pictureItem.likes,
            commentsCount: pictureItem.comments.length
          };
          picture.addEventListener('click', function (event) {
            event.preventDefault();
            window.showGallery(pictureOptions);
          });
        });
      };

      function filterPicturesContainer(event) {
        switch (event.target.htmlFor) {
          case ('filter-popular'):
            renderPictures(pictures);
            break;
          case ('filter-new'):
            renderPictures(window.helpers.getRandomArrayFromArray(pictures.slice(0), 10));
            break;
          case ('filter-discussed'):
            window.helpers.sortFunc(pictureArrayCommented);
            renderPictures(pictureArrayCommented);
            break;
        }
      }

      pictureFilters.classList.remove('hidden');

      renderPictures(pictures);

      pictureFilters.addEventListener('click', function (event) {
        filterPicturesContainer(event);
      });

      pictureFilters.addEventListener('keydown', function (event) {
        if (event.keyCode === window.helpers.ENTER_KEY_CODE) {
          event.target.control.checked = true;
          filterPicturesContainer(event);
        }
      });
    });
