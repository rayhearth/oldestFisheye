export class PhotographersIndexCards {
  constructor(photographers) {
    console.log(photographers)
    this._name = photographers.name
    this._id = photographers.id
    this._city = photographers.city
    this._country = photographers.country
    this._tagline = photographers.tagline
    this._price = photographers.price
    this._portrait = photographers.portrait
  }

  get renderOnePhotographer() {
    return `<article class="photographer-card">
            <a href="photographer.html?id=${this._id}">
                <img class="img-profile" src="assets/images/photographers/${this._id}/${this._portrait}" alt="${this._name}">
                <h2 class="photographer-name">${this._name}</h2>
            </a>
            <p class="photographer-location">${this._city}, ${this._country}</p>
            <p class="photographer-tagline">${this._tagline}</p>
            <p class="photographer-price">${this._price}€/jour</p>
        </article>`
  }
}


export class PhotographerPageCards {
  constructor(photographer) {
    // console.log(photographer)
    this._name = photographer.name
    this._id = photographer.id
    this._city = photographer.city
    this._country = photographer.country
    this._tagline = photographer.tagline
    this._price = photographer.price
    this._portrait = photographer.portrait
  }

  get renderPhotographHeader() {
    return ` <div class="photographer-header" aria-label="photographer profile of ${this._name}">
    <div class="infosPhotographer">
    <h1>${this._name}</h1>
    <div class="locationandtag">
      <p class="location">${this._city}, ${this._country}</p>
      <p class="tagline">${this._tagline}</p>
    </div>
    </div>
        <button class="contact_button" id="contactBtn" aria-labelleby="photographer contact ${this._name}">Contactez-moi</button>
        <img class="img-profile" src="assets/images/photographers/${this._id}/${this._portrait}" alt="">
        </div>
      
      <div class="contactModal" id="contactModal">
        <div class="content">
            <div class="headerModal">
              <div class="title">
                <h2>Contactez-moi</h2>
                <p class="photographerName">${this._name}</p>
              </div>
              <div class="close closeModal" id="closeModal">
                <svg class="svg-inline--fa fa-xmark contactCloseIcon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>
              </div>
            </div>
          <form name="contactForm" id="contactForm">
            <div class="formData">
              <label class="form-label" for="firstName">Prénom</label>
              <input class="form-control" type="text" id="first" name="firstName"/>
            </div>
            <div class="formData">
              <label class="form-label" for="lastName">Nom</label>
              <input class="form-control" type="text" id="last" name="lastName"/>
            </div>
            <div class="formData">
              <label class="form-label" for="email">E-mail</label>
              <input class="form-control" type="email" id="email" name="email"/>
            </div>
            <div class="formData">
              <label class="form-label" for="textArea">Votre message</label>
              <textarea name="contactTextArea" id="textContact" cols="30" rows="10"></textarea>
            </div>
          </form>
          <button class="contact_button" type="submit">Envoyer</button>
        </div>
      </div>
    </div>`
  }
}

