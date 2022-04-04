export class LightboxContain {


  static init(medias) {
    const links = document.querySelectorAll('.mediaLink')
    links.forEach(link =>{
      link.removeEventListener('click', e=>{
        e.preventDefault()
        new LightboxContain(medias[e.currentTarget.light],medias)
      })
      link.addEventListener('click', e=>{
        e.preventDefault()
        new LightboxContain(medias[e.currentTarget.light],medias)
      })
    })
    
  }

  constructor(medias) {
    //  element = this.buildDOM(this._id)
    //  document.body.appendChild(element)
    // this._image = medias.image
    //this.currrentMedia = null
    this.medias = medias //permet de récupérer tous les médias pour affichage prev et next
    console.log(this.listMedias)
    //this.manageEvent()
  }

  // buildDOM(){
  //   const dom = document.createElement('div')
  //   dom.classList.add('lightbox')
  //   dom.innerHTML = `<button class="lightbox__prev" aria-label="Previous media" data-lightbox-prev>
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
  //     <path
  //       d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
  //   </svg>
  // </button>
  // <div class="lightbox-media" id="light">
  // </div>
  // <button class="lightbox__next" aria-label="Next media" data-lightbox-next>
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
  //     <path
  //       d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
  //   </svg>
  // </button>
  // <button class="lightbox__close" id="lightbox__close" aria-label="Close" data-lightbox-close>
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
  //     <path
  //       d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" />
  //   </svg>
  // </button>
  //   `
  //   return dom
  // }

  //methode pour rechercher dans nos médias l'id qui est égale à l'id passé ds la méthode
  mediaById(id){
    return this.listMedias.find((media) => media.id == id)
  }

  //affiche modal au click d'un média
  CurrentLightbox(id){
    this.currentMedia = this.mediaById(id)
    this.openLightbox()
    document.body.classList.add('overflow')
    window.scrollTo(0, 0)
    lightbox-media.scrollTo(0, 0)
    
    lightbox.setAttribute('aria-hidden', 'false')
    lightbox.style.display = ''
  }
  
  //Méthode pour afficher la modale et injecter notre media
  openLightbox(){
    
    let content = document.querySelector('#light')

    // console.log(currentMedia)
    document.addEventListener('keyup', this.onKeyUp)
    
    // if(this.currentMedia.image){
    //   content.innerHTML=
    //   `<img class="picture" src="assets/images/photographers/${this.currentMedia.photographerId}/media/${this.currentMedia.image}" alt="${this.currentMedia.title}">
    //   <h2 class="lightbox-media-title" data-lightbox-caption>${this.currentMedia.title}</h2>
    //   `
    // }else{
    //   content.innerHTML=
    //   `<video controls class="picture" media-id=${this.currentMedia.id} aria-label=${this.currentMedia.title}>
    //   <source src="assets/images/photographers/${this._photographerId}/media/${this._video}"type="video/mp4">
    //   </video>
    //   <svg class="svg-inline--fa fa-video mediaIcon" aria-hidden="true" focusable="false" data-prefix="fas"
    //   data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
    //   <path fill="currentColor"
    //   d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z">
    //   </path>
    //   </svg>
    //   <h2 class="lightbox-media-title" data-lightbox-caption>${this.currentMedia.title}</h2>
    //   `
    // }
    //on ajoute notre class ligthboxopen
    document.body.classList.add('lightboxOpen')
  }

  //méthode pour la navigation au clavier
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.closeLightbox(e)
    } else if (e.key === "ArrowLeft") {
      this.previous(e)
    } else if (e.key === "ArrowRight") {
      this.next(e)
    }
  }


  next() {
      for (let i=0; i<this.listMedias.length; i++) {
        if(this.listMedias[i] == this.currentMedia){
          if(i == this.listMedias.lenght){
            this.currentMedia = this.listMedias[0]
          }else{
            this.currentMedia = this.listMedias[++i]
          }
          break
        }
      }
  }

  previous() {
    for (let i=0; i<this.listMedias.length; i++) {
      if(this.listMediass[i] == this.currentMedia){
        if(i == this.listMedias.lenght){
          this.currentMedia = this.listMedias[0]
        }else{
          this.currentMedia = this.listMedias[--i]
        }
        break
      }
    }
  }

  manageEvent() {
    const nextMedia = document.querySelector(".lightbox__next")
    nextMedia.addEventListener("click", () => {
      this.next()
    })
    // nextMedia.addEventListener('keydown',nextEvent =>{
    //   if(nextEvent.keycode === 13 || nextEvent.keycode === 32){
    //     nextEvent.preventDefault()
    //     this.next()
    //   }
    // })

    const prevMedia = document.querySelector(".lightbox__prev")
    prevMedia.addEventListener("click", () => {
      this.previous()
    })
    // prevMedia.addEventListener('keydown',prevEvent =>{
    //   if(prevEvent.keycode === 13 || prevEvent.keycode === 32){
    //     nextEvent.preventDefault()
    //     this.previous()
    //   }
    // })

    const closeBtn = document.querySelector("#lightbox__close")
    closeBtn.addEventListener("click", () => {
      this.closeLightbox()
    })
  }

  
  //Fermeture de la lightbox
  closeLightbox() {
    document.body.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    document.removeEventListener('Keyup', this.onKeyUp)
    document.querySelector('#openModal').focus()
    lightbox.setAttribute('aria-hidden', 'true')

    lightbox.style.display = 'none'
  }

  //focus la lightbox
  LightboxFocus() {
    const lightboxTitleMedia = document.querySelector("h2")
    lightboxTitleMedia.focus()
    const closeBtn = document.querySelector(".lightbox__close")
    const prev = document.querySelector(".lightbox__prev")
    const next = document.querySelector(".lightbox__next")

    lightboxTitleMedia.addEventListener("focusout", () => {
      next.focus()
    })
    arrowRight.addEventListener("focusout", () => {
      prev.focus()
    })
    arrowLeft.addEventListener("focusout", () => {
      closeBtn.focus()
    })
  }


}