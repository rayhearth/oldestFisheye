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

  renderVideo() {
    return `
      <video controls class="picture" media-id=${this._id} aria-label=${this._title}>
        <source src="assets/images/photographers/${this._photographerId}/media/${this._video}"type="video/mp4"></video>
        <svg class="svg-inline--fa fa-video mediaIcon" aria-hidden="true" focusable="false" data-prefix="fas"
        data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
        <path fill="currentColor"
        d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z">
        </path>
        </svg>`
  }

  renderVideoLightbox() {
    return `
    <video controls class="picture" media-id=${this._id} aria-label=${this._title}>
      <source src="assets/images/photographers/${this._photographerId}/media/${this._video}"type="video/mp4">
    </video>
      <svg class="svg-inline--fa fa-video mediaIcon" aria-hidden="true" focusable="false" data-prefix="fas"
      data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
      <path fill="currentColor"
      d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z">
      </path>
    </svg>
      <h2 class="lightbox-media-title" data-lightbox-caption>${this._title}</h2>
    `
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

  renderImage() {
      return `   
      <img role="button" class="picture" src="assets/images/photographers/${this._photographerId}/media/${this._image}" alt="${this._title}">`
  }

  renderImageLighbox() {
      return `
      assets/images/photographers/${this._photographerId}/media/${this._image}" alt="${this._title}
      <h2 class="lightbox-media-title" data-lightbox-caption>${this.title}</h2>
      `
  }
}



