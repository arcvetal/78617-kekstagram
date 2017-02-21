'use strict';

window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (e) {
      var pictures = [];
      pictures = JSON.parse(e.target.response);

      var templateElement = document.querySelector('#picture-template');
      var pictureClone = templateElement.content.querySelector('.picture');
      var pictureContainer = document.querySelector('.pictures');

      for (var i = 0; i < pictures.length; i++) {
        var picture = pictureClone.cloneNode(true);
        var image = picture.querySelector('img');
        var comments = picture.querySelector('.picture-comments');
        var likes = picture.querySelector('.picture-likes');
        image.setAttribute('src', pictures[i].url);
        comments.textContent = pictures[i].comments.length;
        likes.textContent = pictures[i].likes;
        pictureContainer.appendChild(picture);
        var pictureBlock = {
          link: pictures[i].url,
          likesCount: pictures[i].likes,
          commentsCount: pictures[i].comments.length
        };
        picture.addEventListener('click', function (evt) {
          evt.preventDefault();
          window.showGallery(pictureBlock);
        });
      }
    });
