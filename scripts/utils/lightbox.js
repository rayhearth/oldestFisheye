export class LightboxContain {

  constructor(medias) {
    // this._id = medias.id
    // this._image = medias.image
    this.currrentMedia = null
    this.listMedias = medias //permet de récupérer tous les médias pour affichage prev et next
    // console.log(this.listMedias)
    this.manageEvent()
  }

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
    this.currentMedia = currentTarget.querySelector()

    // console.log(currentMedia)
    document.addEventListener('keyup', this.onKeyUp)
    
    if(this.currentMedia.image){
      content.innerHTML=
      `<img class="picture" src="assets/images/photographers/${this.currentMedia.photographerId}/media/${this.currentMedia.image}" alt="${this.currentMedia.title}">
      <h2 class="lightbox-media-title" data-lightbox-caption>${this.currentMedia.title}</h2>
      `
    }else{
      content.innerHTML=
      `<video controls class="picture" media-id=${this.currentMedia.id} aria-label=${this.currentMedia.title}>
      <source src="assets/images/photographers/${this._photographerId}/media/${this._video}"type="video/mp4">
      </video>
      <svg class="svg-inline--fa fa-video mediaIcon" aria-hidden="true" focusable="false" data-prefix="fas"
      data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
      <path fill="currentColor"
      d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z">
      </path>
      </svg>
      <h2 class="lightbox-media-title" data-lightbox-caption>${this.currentMedia.title}</h2>
      `
    }
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