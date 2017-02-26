'use strict';

window.showGallery = (function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryOverlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
  var galleryImage = galleryOverlay.querySelector('.gallery-overlay-image');
  var galleryLikes = galleryOverlay.querySelector('.likes-count');
  var galleryComments = galleryOverlay.querySelector('.comments-count');

  var onGalleryOverlayCloseClick = function () {
    window.helpers.hideElement(galleryOverlay);
  };

  var onGalleryOverlayCloseKeydown = function (event) {
    if (window.helpers.isEscapeKeyPressed(event) || window.helpers.isEnterKeyPressed(event) && !galleryOverlay.classList.contains('invisible')) {
      window.helpers.hideElement(galleryOverlay);
    }
  };

  function closeGallery() {
    galleryOverlayClose.addEventListener('click', onGalleryOverlayCloseClick);
    galleryOverlayClose.addEventListener('keydown', onGalleryOverlayCloseKeydown);
  }

  return function (pictureOptions) {
    window.helpers.showElement(galleryOverlay);
    setTimeout(function () {
      galleryOverlayClose.focus();
    }, 10);
    galleryImage.setAttribute('src', pictureOptions.link);
    galleryLikes.textContent = pictureOptions.likesCount;
    galleryComments.textContent = pictureOptions.commentsCount;
    closeGallery();
  };
})();
