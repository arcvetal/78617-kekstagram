'use strict';

window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (e) {
      var pictures = [];
      pictures = JSON.parse(e.target.response);

      var templateElement = document.querySelector('#picture-template');
      var pictureClone = templateElement.content.querySelector('.picture');
      var pictureContainer = document.querySelector('.pictures');

      pictures.forEach(function (pictureItem) {
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
    });
