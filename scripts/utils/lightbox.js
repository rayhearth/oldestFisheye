export class LightboxContain {

  constructor(media) {
    this.media = media.id
    this.currrentMedia = null
    this._photographerId = media.photographerId
    this._title = media.title
    this._video = media.video

  }
  
  // constructor(media, selector) {
  //   this.medias = media.id //avoir la liste des medias et pouvoir récupérer le précédent et le suivant
  //   this.currentMedia = null
  //   this.selector = selector
  //   this.element = document.querySelector(selector)
  // }

    
  play(){
    this.currentMedia = this.media[0]
  }

  next() {
      for (let i=0; i<this.media.length; i++) {
        if(this.media[i] == this.currentMedia){
          if(i == this.media.lenght){
            this.currentMedia = this.media[0]
          }else{
            this.currentMedia = this.media[++i]

          }
          break
        }
      }
  }

  previous() {
    for (let i=0; i<this.media.length; i++) {
      if(this.media[i] == this.currentMedia){
        this.currentMedia = this.media[--i]
        break
      }
    }
  }

  manageEvent(){
    const nextMedia = document.querySelector(".lightbox__next")
    nextMedia.addEventListener("click", ()=>{
      this.next()
    })

    const prevMedia = document.querySelector(".lightbox__prev")
    prevMedia.addEventListener("click", ()=>{
      this.previous()
    })

    const closeBtn = document.querySelector("#lightbox__close")
    closeBtn.addEventListener("click",()=>{
      this.closeLightbox()
    })
  }

  openLightbox() {
    document.body.classList.add('lightboxOpen')
    document.body.classList.add('overflow')
    window.scrollTo(0, 0)
    lightboxMedia.scrollTo(0, 0)

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