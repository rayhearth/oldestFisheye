export class lightboxContain {

  
  constructor(listMedias) {
    this.currentMedia = null;
    this.listMedias = listMedias //avoir la liste des medias et pouvoir récupérer le précédent et le suivant
    this.onKeyUp = this.onKeyUp.bind(this)
    this.manageEvent()
  }
  

  //afficher le prochain média
  //si on arrive en fin de tableau des medias on repart au début.
  next() {
    //on récupère l'index de l'élément en cours dans le tableau (findIndex)
    const index = this.listMedias.findIndex(
      (element) => element.id == this.currentMedia.id
    )
    if (index == this.listMedias.length - 1) {
      //si on arrive sur le dernier index du tableau
      this.currentMedia = this.listMedias[0] //on repart au debut du tableau
    } else {
      this.currentMedia = this.listMedias[index + 1]
    }
    //console.log(index);
    this.display()
  }

  //afficher les médias précédents
  //si on arrive au début de tableau, on repart sur le dernier média
  previous() {
    const index = this.listMedias.findIndex(
      (element) => element.id == this.currentMedia.id
    );
    if (index == 0) {
      //si on est sur le 1er element du tableau
      this.currentMedia = this.listMedias[this.listMedias.length - 1] //on repart de la fin du tableau
    } else {
      this.currentMedia = this.listMedias[index - 1]
    }
    //console.log(index);
    this.display()
  }

  

  openLightbox() {
    //appelée dans photographer.js/displayDataMedia()
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