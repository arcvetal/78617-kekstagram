'use strict';

window.showGallery = (function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryOverlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
  var galleryImage = galleryOverlay.querySelector('.gallery-overlay-image');
  var galleryLikes = galleryOverlay.querySelector('.likes-count');
  var galleryComments = galleryOverlay.querySelector('.comments-count');

  function closeGallery() {
    galleryOverlayClose.addEventListener('click', function () {
      window.helpers.hideElement(galleryOverlay);
    });
    galleryOverlayClose.addEventListener('keydown', function (e) {
      if (e.keyCode === window.helpers.ESC_KEY_CODE || window.helpers.ENTER_KEY_CODE && !galleryOverlay.classList.contains('invisible')) {
        window.helpers.hideElement(galleryOverlay);
      }
    });
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
