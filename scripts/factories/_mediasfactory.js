//2 constructor avec une fonction statique qui permettent de recup le infos du json et une fonction statique pour prep le rendu html

class VideoMediaFactory {
  constructor(media) {
    this._video = media.video
    this._id = media.id
    this._photographerId = media.photographerId
  }

  RenderVideo() {
    return `
      <video class="picture" media-id=${this._idid} poster="">
        <source src="assets/images/photographers/${this._photographerId}/media/${this._video}"type="video/mp4"></video>
        <svg class="svg-inline--fa fa-video mediaIcon" aria-hidden="true" focusable="false" data-prefix="fas"
        data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
        <path fill="currentColor"
        d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z">
        </path>
        </svg>`
  }
}

class ImageMediaFactory {
  constructor(media) {
    this._image = media.image
    this._photographerId = media.photographerId
    this._title = media.title
  }
  //static render(image, photographerId, title) 
  RenderImage() {
    return `   
      <img class="picture" src="assets/photographers/${this.photographerId}/media/${this._image}" alt="${this._title}">`
  }
}

export class MediasFactory {

  constructor(media, type) {
    if (type === 'image') {
      return new ImageMediaFactory(media)
    } else if (type === 'video') {
      return new VideoMediaFactory(media)
    } else {
      throw 'unkown format type'
    }
  }

  //     renderOneMedia(media) {
  //           console.log(media)
  //             return `<article class="mediaContentCard">
  //             <div class="mediaCard" media-id=${media.id}>
  //             ${media.video?VideoMediaFactory:ImageMediaFactory}
  //             </div>
  //             <div class="media-legend">
  //               <p class="media-legend-title">${media.title}</p>
  //               <div class="media-legend-like" liked="no" data-media-id="5234343">
  //                 <span class="media-legend-cunt" id="like-cunt">${media.likes}</span>
  //                 <svg class="hearth" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img"
  //                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
  //                   <path fill="currentColor"
  //                     d="M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98l-19.7 20.27l-19.7-20.27C208.6 47.4 170.8 32 133.3 32C103.1 32 73.23 41.93 49.04 62.86c-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7C239.4 476.7 247.6 480 255.9 480c8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1l-181.6 187.8L74.34 237.1C42.1 203.8 34.46 138.1 80.46 99.15c39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92l54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z">
  //                   </path>
  //                 </svg>
  //               </div>
  //             </div>
  //           </article>`
  // }
}