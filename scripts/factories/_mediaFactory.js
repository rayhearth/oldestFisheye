import { Api } from '../api/_api.js'
import { VideoMediaCards, ImageMediaCards } from '../models/_mediasCards.js'
// import { lightbox } from '../utils/lightbox.js'


export class MediaFactory extends Api {


  /*méthode pour récupérer tous les médias*/
  async getAllMedia(photographerId) {
    try {
      //on reste en attente de la fonction getMediaApi
      let medias = await this.getMediaApi(photographerId)
      console.log(medias)
      // let renderPicture = [...renderImage,...renderVideo]
      //On declare render picture qui va parcourir notre array obtenu via getMediaApi 
      let renderPicture = medias.map(media => {
        //pour chaque media
        // console.log(media)
        if (media.hasOwnProperty("image")) {
          //si le media a pour nom "image" alors il va nous retourner notre ImageMediaFactory
          return new ImageMediaCards(media)
        } else {
          //sinon il nous retourne notre VideoMediaFactory
          return new VideoMediaCards(media)
        }
      })
      // ajout instance lightbox
      // console.log(renderPicture)
      //lorsque nous retournons la methode renderAllMedia on lui transmet notre renderPicture
      return this.renderAllMedia(renderPicture)
    } catch (err) {
      console.log(err)
    }
  }

  renderAllMedia(medias) {
    let all = ''
    for (let media of medias) {
      all += this.renderOneMedia(media)
    }

    //ajout du rendu lightbox slide
    return all
  }

  // renderPicture = new MediasFactory


  renderOneMedia(media) {
    // console.log(media)
    return `<article class="mediaContentCard">
    <div class="mediaCard mediaLink" media-id=${media._id}>
      ${media._image ? media.renderImage() : media.renderVideo()}
    </div>
    <div class="media-legend">
      <p class="media-legend-title">${media._title}</p>
      <div class="media-legend-like" liked="no" media-id=${media._id}>
        <span class="media-legend-cunt" id="like-cunt">${media._likes}</span>
        <svg class="hearth" aria-hidden="true" focusable="false" data-prefix="far" data-icon="hearth" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
          <path fill="currentColor"
            d="M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98l-19.7 20.27l-19.7-20.27C208.6 47.4 170.8 32 133.3 32C103.1 32 73.23 41.93 49.04 62.86c-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7C239.4 476.7 247.6 480 255.9 480c8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1l-181.6 187.8L74.34 237.1C42.1 203.8 34.46 138.1 80.46 99.15c39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92l54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z">
          </path>
        </svg>
      </div>
    </div>

    <div class="ligthbox" id="ligthbox" arial-label="image closeup view" role="dialog">
    <button class="lightbox__prev" aria-label="Previous media" data-lightbox-prev>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
      <path
        d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
    </svg>
  </button>
  <div class="lightbox-media">
    <div class="lightbox-media-container" media-id="${media._id}" data-lightbox-media>
      ${media._image ? media.renderImage() : media.renderVideo()}
    </div>
    <h2 class="lightbox-media-title" data-lightbox-caption>${media._title}</h2>
  </div>
  <button class="lightbox__next" aria-label="Next media" data-lightbox-next>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
      <path
        d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
    </svg>
  </button>
  <button class="lightbox__close" id="lightbox__close" aria-label="Close" data-lightbox-close>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path
        d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" />
    </svg>
  </button>
    </div>
  </article>`
  }



}