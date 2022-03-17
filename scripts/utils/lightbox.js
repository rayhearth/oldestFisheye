export class lightbox {

    constructor(media) {
      // console.log("image")
      // console.log(media)
      this._id = media.id
      this._photographerId = media.photographerId
      this._title = media.title
      this._image = media.image
      this._video = media.video
      this._likes = media.likes
      this._date = media.date
      this._price = media.price
    }

    // DOM Elements
  let openLightbox = document.querySelectorAll(".lightbox-media");
  let lightbox = document.querySelector("#lightbox");
  let closeLightbox = document.querySelector("#lightbox__close");
  let mediaInLightbox = document.querySelector(".lightbox-media-container");
  let prev = document.querySelector(".lightbox__prev");
  let next = document.querySelector(".lightbox__next");

  let domInsertMediaId = 0;
  let indexOfMediaVue = -1;
  let lastMediaId = 29;
  
  // open Lightbox event (img click or keydown)
  openLightbox.forEach(mediaClicked => {
    mediaClicked.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      let mediaId = event.target.getAttribute("media-id");
      medias.forEach(media => {
        if (media.id == mediaId) {
          getLightbox(media, mediaInLightbox, photographe);
          indexOfMediaVue = medias.findIndex((media) => media.id == domInsertMediaId);
        }
      });
      launchLightbox();
      navigate();
    })
    mediaClicked.addEventListener("keydown", enterEvent => {
      if (enterEvent.keyCode === 13 || enterEvent.keyCode === 32) {
        enterEvent.preventDefault();
        enterEvent.stopPropagation();
        mediaClicked.click();
      }
    })
  })  }