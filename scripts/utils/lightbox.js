export class lightbox {


  static init() {
    const links = document.querySelectorAll('lightbox-media-container')
      .forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        new lightbox(e.currentTarget.getAttribute('#media-id'))
      }))
  }

  constructor(url) {
    const element = this.buildDOM(url)
    document.body.appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)

  }

  close(e) {
    e.preventDefault()
    this.element.classList.add('fadeOut')
    window.setTimeout(()=>{
      this.element.parentElement.removeChild(this.element)
    },500)
  }

onKeyUp (e) {
  if (e.key === 'Escape'){
    this.close(e)
  }
}

  buildDOM(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `
    <button class="lightbox__prev" aria-label="Previous media" data-lightbox-prev>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
      <path
        d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
    </svg>
  </button>
  <div class="lightbox-media">
    <div class="lightbox-media-container" media-id="${media._id}" data-lightbox-media>
      ${media._image ? media.renderImage() : media.renderVideo()}
    </div>
    <h2 class="lightbox-media-title" data-lightbox-caption>${media._title}</h2>
  </div>
  <button class="lightbox__next" aria-label="Next media" data-lightbox-next>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
      <path
        d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
    </svg>
  </button>
  <button class="lightbox__close" id="lightbox__close" aria-label="Close" data-lightbox-close>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path
        d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" />
    </svg>
  </button>`
    dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    return dom
  }
  //   // DOM Elements
  // let openLightbox = document.querySelectorAll(".lightbox")
  // let lightbox = document.querySelector("#lightbox")
  // let closeLightbox = document.querySelector("#lightbox__close")
  // let currentMedia = document.querySelector(".lightbox-media-container")
  // let prev = document.querySelector(".lightbox__prev")
  // let next = document.querySelector(".lightbox__next")
  // let domInsertMediaId = 0
  // let indexOfMediaVue = -1


  // // open Lightbox event
  // openLightbox.forEach(mediaClicked => {
  //   mediaClicked.addEventListener("click", event => {
  //     event.preventDefault()
  //     event.stopPropagation()
  //     let mediaId = event.target.getAttribute("media-id")
  //     medias.forEach(media => {
  //       if (media.id == mediaId) {
  //         getLightbox(media, currentMedia)
  //         indexOfMediaVue = medias.findIndex((media) => media.id == domInsertMediaId);
  //       }
  //     });
  //     launchLightbox();
  //     navigate();
  //   })
  //   mediaClicked.addEventListener("keydown", enterEvent => {
  //     if (enterEvent.keyCode === 13 || enterEvent.keyCode === 32) {
  //       enterEvent.preventDefault()
  //       enterEvent.stopPropagation()
  //       mediaClicked.click()
  //     }
  //   })
  // })  