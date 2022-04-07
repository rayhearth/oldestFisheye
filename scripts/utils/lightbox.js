export class LightboxContain {

  //DOM element
  openLightboxBtn = document.querySelector('.mediaLink')
  closeLightboxBtn = document.querySelector('#lightbox__close')
  nextBtn = document.querySelector('#lightbox__next')
  prevBtn = document.querySelector('#lightbox__prev')


  static init(){
    //je sélectionne tous les liens qui mènent vers les img ou video ayant le selecteur medi-id
    // const Links = document.querySelectorAll('#media-id')
      //pour chaque lien je lui ajoute un listener qui lors du click prend en param l'évènement
      // forEach(link => link.addEventListener('click', e=> {
        //on stoppe le comportement
        // e.preventDefault()
        //on initialise une nouvelle lightbox pour cela on recup le lien de notre media 
        // new LightboxContain(e.currentTarget.getAttribute('#media-id'))
      // }))
    launchLightbox.forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()
        //on declare la variable mediaId au media-id sur lequel on vient de declencher notre event
        let mediaId = e.target.getAttribute('#media-id')
          //si l'id de this currentMedia est égale à notre variable MediaId
          if (this.currentMedia == mediaId) {
            //Alors je veux que tu lance ma meth openlightbox et manage event
            openLightbox()
  
            manageEvent()
          }
      })
    })
  }

  
  //Listener

constructor(medias) {
  // on recup toutes les infos de nos medias
  this.listMedias = medias
  //on recup tous les id
  this.currentMedia = medias.id
  // console.log(this.currentMedia)
  //this.manageEvent()
}


//Méthode pour afficher la modale
openLightbox() {
  document.body.classList.add('overflow')
  document.body.classList.add('lightboxOpen')
  window.scrollTo(0, 0)
  lightbox-media.scrollTo(0, 0)
  lightbox.setAttribute('aria-hidden', 'false')

  lightbox.style.display = ''

  document.addEventListener('keyup', this.onKeyUp)
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
  for (let i = 0; i < this.listMedias.length; i++) {
    if (this.listMedias[i] == this.currentMedia) {
      if (i == this.listMedias.lenght) {
        this.currentMedia = this.listMedias[0]
      } else {
        this.currentMedia = this.listMedias[++i]
      }
      break
    }
  }
}

previous() {
  for (let i = 0; i < this.listMedias.length; i++) {
    if (this.listMediass[i] == this.currentMedia) {
      if (i == this.listMedias.lenght) {
        this.currentMedia = this.listMedias[0]
      } else {
        this.currentMedia = this.listMedias[--i]
      }
      break
    }
  }
}

manageEvent() {
  const nextMedia = document.querySelector("#lightbox__next")
  nextMedia.addEventListener("click", () => {
    this.next()
  })
  // nextMedia.addEventListener('keydown',nextEvent =>{
  //   if(nextEvent.keycode === 13 || nextEvent.keycode === 32){
  //     nextEvent.preventDefault()
  //     this.next()
  //   }
  // })

  const prevMedia = document.querySelector("#lightbox__prev")
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
  const closeBtn = document.querySelector("#lightbox__close")
  const prev = document.querySelector("#lightbox__prev")
  const next = document.querySelector("#lightbox__next")

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

LightboxContain.init()