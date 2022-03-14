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
  
    lightboxSlide() {
      return `<div class="ligthbox" id="ligthbox" arial-label="image closeup view" role="dialog">
      <button class="lightbox__prev" aria-label="Previous media" data-lightbox-prev>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"/></svg>
      </button>
      <div class="lightbox-media">
        <div class="lightbox-media-container" media-id="${this._id} data-lightbox-media>
          ${media._image ? media.renderImage : media.renderVideo}
        </div>
        <h2 class="lightbox-media-title" data-lightbox-caption>${this._title}</h2>
      </div>
      <button class="lightbox__next" aria-label="Next media" data-lightbox-next>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"/></svg>
      </button>
      <button class="lightbox__close" aria-label="Close" data-lightbox-close>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"/></svg>
      </button>
    </div>`
    }
  }