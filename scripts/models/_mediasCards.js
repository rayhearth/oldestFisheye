export class VideoMediaCards {
  constructor(media) {
    this._id = media.id
    this._photographerId = media.photographerId
    this._title = media.title
    this._video = media.video
    this._likes = media.likes
    this._date = media.date
    this._price = media.price
  }

  get likes() {
    return this._likes
  }

  get date() {
    return this._date
  }

  get price() {
    return this._price
  }

  get renderVideo() {
    return `
      <video class="picture" media-id=${this._id} poster="">
        <source src="assets/images/photographers/${this._photographerId}/media/${this._video}"type="video/mp4"></video>
        <svg class="svg-inline--fa fa-video mediaIcon" aria-hidden="true" focusable="false" data-prefix="fas"
        data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
        <path fill="currentColor"
        d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z">
        </path>
        </svg>`
  }
}

export class ImageMediaCards {
  constructor(media) {
    // console.log("image")
    // console.log(media)
    this._id = media.id
    this._photographerId = media.photographerId
    this._title = media.title
    this._image = media.image
    this._likes = media.likes
    this._date = media.date
    this._price = media.price
  }

  get id() {
    return this._id
  }

  get photographerId() {
    return this._photographerId
  }

  get title() {
    return this._title
  }

  get likes() {
    return this._likes
  }

  get date() {
    return this._date
  }

  get price() {
    return this._price
  }

  get renderImage() {
    return `   
      <img role="button" class="picture" src="assets/images/photographers/${this._photographerId}/media/${this._image}" alt="${this._title}">`
  }
}

/* lightbox*/

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

  get lightboxSlide() {
    return `<div class="ligthbox" id="ligthbox" arial-label="image closeup view" role="dialog">
    <div class="lightbox__close lightbox-button" aria-label="fermer"></div>
    <div class="lightbox__next lightbox-button" aria-label="next media"></div>
    <div class="lightbox__prev lightbox-button" aria-label="previous media"></div>
    <div class="lightbox__container" media-id="${this._id}">
    ${media._image ? media.renderImage : media.renderVideo}
    <p class="titleImg" tabindex="0" aria-label="${this._title}">${this._title}</p>
    </div>
  </div>`
  }

}
