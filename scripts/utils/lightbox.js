export class LightboxContain {

  constructor(medias) {
    this._id = medias.id
    this.currrentMedia = null
    this._photographerId = medias.photographerId
    this._title = medias.title
    this._video = medias.video
    this._image = medias.image
  }

  // renderLightbox(){
  //   return `<div class="lightbox" id="ligthbox" arial-label="image closeup view" role="dialog">
  //   <button class="lightbox__prev" aria-label="Previous media" data-lightbox-prev>
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
  //       <path
  //         d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
  //     </svg>
  //   </button>
  //   <div class="lightbox-media" id="light">
  //   <div class="lightbox-media-container" media-id="${medias._id}" data-lightbox-media>
  // ${media._image ? media.renderImage() : media.renderVideo()}
  // <h2 class="lightbox-media-title" data-lightbox-caption>${medias._title}</h2>
  // </div>
  //   </div>
  //   <button class="lightbox__next" aria-label="Next media" data-lightbox-next>
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
  //       <path
  //         d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
  //     </svg>
  //   </button>
  //   <button class="lightbox__close" id="lightbox__close" aria-label="Close" data-lightbox-close>
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
  //       <path
  //         d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" />
  //     </svg>
  //   </button>
  // </div>`
  // }


  // play(){
  //   this.currentMedia = this.medias[0]
  // }

  next() {
      for (let i=0; i<this.medias.length; i++) {
        if(this.medias[i] == this.currentMedia){
          if(i == this.medias.lenght){
            this.currentMedia = this.medias[0]
          }else{
            this.currentMedia = this.medias[++i]

          }
          break
        }
      }
  }

  previous() {
    for (let i=0; i<this.medias.length; i++) {
      if(this.medias[i] == this.currentMedia){
        this.currentMedia = this.medias[--i]
        break
      }
    }
  }

  manageEvent() {
    const nextMedia = document.querySelector(".lightbox__next")
    nextMedia.addEventListener("click", () => {
      this.next()
    })

    const prevMedia = document.querySelector(".lightbox__prev")
    prevMedia.addEventListener("click", () => {
      this.previous()
    })

    const closeBtn = document.querySelector("#lightbox__close")
    closeBtn.addEventListener("click", () => {
      this.closeLightbox()
    })
  }

  openLightbox() {
    document.body.classList.add('lightboxOpen')
    document.body.classList.add('overflow')
    window.scrollTo(0, 0)
    lightbox - media.scrollTo(0, 0)

    lightbox.getAttribute('aria-hidden', 'false')
    lightbox.style.display = ''
  }


  closeLightbox() {
    document.body.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    lightbox.getAttribute('aria-hidden', 'true')

    lightbox.style.display = 'none'
  }


}