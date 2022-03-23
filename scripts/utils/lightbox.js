export class lightboxContain {



  openLightbox() {
    //appelée dans photographer.js/displayDataMedia()
    document.body.classList.add('lightboxOpen')
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
  // navigation in lightbox (arrows or keyboard)
  navigate() {
  previousBtn.addEventListener("click", previous);
  nextBtn.addEventListener("click", next);
  previousBtn.addEventListener("keydown", leftEvent => {
    if (leftEvent.keyCode === 13 || leftEvent.keyCode === 32) {
      leftEvent.preventDefault();
      previous();
    }
  })
  rightArrow.addEventListener("keydown", rightEvent => {
    if (rightEvent.keyCode === 13 || rightEvent.keyCode === 32) {
      rightEvent.preventDefault();
      next();
    }
  })
  window.addEventListener("keydown", event => {

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();
      previous();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      rightAction()
    } else if (event.keyCode === 27 && lightbox.contains(document.activeElement)) {
      event.preventDefault();
      lastMediaId = document.querySelector(".lightbox__content__container__media__insert").getAttribute("data-media-id");
      closeDelay(lastMediaId);
    }
  })
  closeLightbox.addEventListener("keydown", e => {
    if (e.keyCode === 9 && closeLightbox.contains(document.activeElement)) {
      e.preventDefault();
      e.stopPropagation();
      lightbox.focus();
    } else if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      lastMediaId = document.querySelector(".lightbox__content__container__media__insert").getAttribute("data-media-id");
      closeDelay(lastMediaId);
    }
  })
}


Next = () => {
  if (indexOfMediaVue > -1 && indexOfMediaVue < medias.length - 1) {
    indexOfMediaVue++;
    mediaInLightbox.innerHTML = ""
    getLightbox(medias[indexOfMediaVue], mediaInLightbox)
  } else if (indexOfMediaVue == medias.length - 1) {
    indexOfMediaVue = 0
    mediaInLightbox.innerHTML = ""
    getLightbox(medias[0], mediaInLightbox)
  }
}

Previous = () => {
  if (indexOfMediaVue > 0) {
    indexOfMediaVue--;
    mediaInLightbox.innerHTML = "";
    getLightbox(medias[indexOfMediaVue], mediaInLightbox)
  } else if (indexOfMediaVue == 0) {
    indexOfMediaVue = medias.length - 1;
    mediaInLightbox.innerHTML = ""
    getLightbox(medias[medias.length - 1], mediaInLightbox)
  }
}



}