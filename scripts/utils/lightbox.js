export class lightboxContain {

  
  constructor(listMedias) {
    this.currentMedia = null;
    this.listMedias = listMedias //avoir la liste des medias et pouvoir récupérer le précédent et le suivant
    this.onKeyUp = this.onKeyUp.bind(this)
    this.manageEvent()
  }

  //affiche la modale lors du click d'un media et appelle la fonction display
  show(id) {
    this.currentMedia = this.getElementById(id);
    this.display()
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

  //paramètre les events sur les boutons, fonction flechées obligatoires pour que this. fasse bien référence  à la classe ou on se trouve
  manageEvent() {
    const nextImg = document.querySelector(".lightbox__next")
    nextImg.addEventListener("click", () => {
      this.next() //appelle la fonction next()
    })
    //console.log(nextImg); //renvoie le bouton next

    const prevImg = document.querySelector(".lightbox__prev")
    prevImg.addEventListener("click", () => {
      this.previous() //appelle la fonction previous()
    })

    const closeBtn = document.querySelector(".lightbox__close")
    closeBtn.addEventListener("click", () => {
      this.close() //appelle la fonction close()
    })

  }

  //recherche dans la liste l'élement dont l'id et égale à l'id passé en paramètre
  getElementById(id) {
    return this.listMedias.find((media) => media.id == id)
  }

  //affiche le media et injecte lightboxOpen dans la lightbox pour que la modale s'ouvre
  display() {
    let container = document.querySelector(".lightbox-media-container")
    document.addEventListener("keyup", this.onKeyUp)

    if (this.currentMedia.image) {
      container.innerHTML = `
      <img id="imgBox" src="./assets/images/${this.currentMedia.photographerId}/${this.currentMedia.image}" 
       aria-label="${this.currentMedia.title}"/>
      <h2 class="lightbox-media-title" tabindex="0" >${this.currentMedia.title}</h2>`;
    } else {
      container.innerHTML = `
      <video controls id="imgBox" src="./assets/images/${this.currentMedia.photographerId}/${this.currentMedia.video}" 
       aria-label="${this.currentMedia.title}"></video>
      <h2 class="lightbox-media-title" tabindex="0" >${this.currentMedia.title}</h2>`;
    }

    document.querySelector(".lightbox").classList.add("lightboxOpen");
  }

  //sortir de la lightbox avec le bouton escape du clavier et naviguer dans la lightbox avec les flèches
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.previous(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
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