export class LightboxContain {

  openLightbox = document.querySelector('#media-id')

    constructor(medias) {
    // this._image = medias.image
    //this.currrentMedia = null
    this.listMedias = medias //permet de récupérer tous les médias pour affichage prev et next
    console.log(this.listMedias)
    //this.manageEvent()
  }

  

  //methode pour rechercher dans nos médias l'id qui est égale à l'id passé ds la méthode
  mediaById(id){
    return this.listMedias.find((media) => media.id == id)
  }

  //affiche modal au click d'un média
  CurrentLightbox(id){
    this.currentMedia = this.mediaById(id)
    this.openLightbox()
  }
  
  //Méthode pour afficher la modale et injecter notre media
  openLightbox() {
    document.body.classList.add('overflow')
    document.body.classList.add('lightboxOpen')
    window.scrollTo(0, 0)
    lightbox-media.scrollTo(0, 0)
    lightbox.setAttribute('aria-hidden', 'false')
    
    lightbox.style.display = ''
    //e.preventDefault()
    //le media en cours est le media sur lequel on vient de click
    this.currentMedia = e.currentTarget.querySelector('mediaLink')
    // console.log(currentMedia)
    console.log(this.currentMedia)
    

    // let content = document.querySelector('#light')

    document.addEventListener('keyup', this.onKeyUp)
    
    
    //on ajoute notre class ligthboxopen
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