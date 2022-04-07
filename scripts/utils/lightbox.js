export class LightboxContain {

  //DOM element
  openLightboxBtn = document.querySelector('.mediaLink')
  closeLightboxBtn = document.querySelector('#lightbox__close')
  nextBtn = document.querySelector('#lightbox__next')
  prevBtn = document.querySelector('#lightbox__prev')


  static init(){
    // je sélectionne tous les liens qui mènent vers les img ou video ayant le selecteur medi-id
    const Links = document.querySelectorAll('#media-id')
      // pour chaque lien je lui ajoute un listener qui lors du click prend en param l'évènement
      .forEach(link => link.addEventListener('click', e=> {
        // on stoppe le comportement
        e.preventDefault()
        // on initialise une nouvelle lightbox pour cela on recup le lien de notre media 
        new LightboxContain(e.currentTarget.getAttribute('#media-id'))
      }))
    // launchLightbox.forEach(el => {
    //   el.addEventListener("click", e => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     //on declare la variable mediaId au media-id sur lequel on vient de declencher notre event
    //     let mediaId = e.target.getAttribute('#media-id')
    //       //si l'id de this currentMedia est égale à notre variable MediaId
    //       if (this.currentMedia == mediaId) {
    //         //Alors je veux que tu lance ma meth openlightbox et manage event
    //         openLightbox()
  
    //         manageEvent()
    //       }
    //   })
    // })
  }

  
  //Listener

constructor(medias) {
  // on recup toutes les infos de nos medias
  // const element = this.buildDOM(medias)
  // document.body.appendChild(element)
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

// LightboxContain.init()
  // buildDOM(){
  //   const dom = document.createElement('div')
  //   dom.classList.add.apply('lightbox')
  //   dom.innerHTML = `<button class="lightbox__prev" id="lightbox__prev" aria-label="Previous media" data-lightbox-prev>
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
  //     <path
  //       d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
  //   </svg>
  // </button>
  // <!-- on injecte le render all lightbox ds la lightboxmedia -->
  // <div class="lightbox-media" id="light"></div>
  // <button class="lightbox__next" id="lightbox__next" aria-label="Next media" data-lightbox-next>
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
  // </button>`
  // return dom
  // }