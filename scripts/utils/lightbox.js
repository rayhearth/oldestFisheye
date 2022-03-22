export class lightboxContain {

  openLightbox() {
    //appelée dans photographer.js/displayDataMedia()
    document.body.classlist.add('lightboxOpen')
    document.body.classList.add('overflow')
    window.scrollTo(0, 0)
    lightboxMedia.scrollTo(0, 0)

    lightbox.getAttribute('aria-hidden', 'false')
    lightbox.style.display = ''
  }


  closeLightbox() {//appelée dans fact_lightbox.js
    document.body.classList.remove('lightboxOpen')
    document.body.classList.remove('overflow')
    lightbox.getAttribute('aria-hidden', 'true')

    lightbox.style.display = 'none'
    console.log('azeaze')
  }


  //apparaitre et disparaitre l'image
  currentMedia(n) { //appelée dans function mediaNav et mediaLocal
    let mediaIndex = 1
    let i

    if (n > lightboxMedia.length) {
      mediaIndex = 1
    }
    if (n < 1) {
      mediaIndex = lightboxMedia.length
    }
    for (i = 0; i < lightboxMedia.length; i++) {
      lightboxMedia[i].style.display = "none"
    }
    lightboxMedia[mediaIndex - 1].style.display = "block"

  }

  //Navigue entre les images, en liaison avec les chevrons (suivant/precedent)
  //appelée dans fact_lightbox.js/ onclick
  mediaNav(n) {
    mediaVue(mediaIndex += n);
  }

  //se situer au moment de la navigation entre images
  mediaLocal(n) { //appelée dans photographer.js/displayDataMedia()
    mediaVue(mediaIndex = n);
  }


  //EVENEMENTS AU CLAVIER POUR LIGHTBOX

  // document.onkeydown = lightboxNavClavier;

  lightboxNavClavier(e) {

    if (e.keyCode == '37') {    //CHEVRON PRECEDENT
      mediaNav(-1);
    }
    else if (e.keyCode == '39') {   //CHEVRON SUIVANT
      mediaNav(1);
    }

    if (lightbox.style.display = "block" && e.code == "Escape") { //CROIX DE FERMETURE
      close();
    }
  }

}