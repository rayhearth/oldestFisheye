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

  renderOnePhotographer() {
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

  renderPhotographHeader() {
    return `<div class="photographer-header" aria-label="photographer profile of ${this._name}">
    <div class="infosPhotographer">
    <h1>${this._name}</h1>
    <div class="locationandtag">
      <p class="location">${this._city}, ${this._country}</p>
      <p class="tagline">${this._tagline}</p>
    </div>
    </div>
        <button class="contactBtn" id="openModal" aria-labelleby="photographer contact ${this._name}">Contactez-moi</button>
        <img class="img-profile" src="assets/images/photographers/${this._id}/${this._portrait}" alt="">
    </div>
      
      <div class="contactModal" id="contactModal" role="dialog" aria-labelledby="contactModal-title" aria-hidden="true">
        <div class="content">
            <div class="headerModal">
              <div class="title">
                <h2>Contactez-moi</h2>
                <p class="photographerName">${this._name}</p>
              </div>
              <div class="closeModal" id="closeModal" aria-label="closeModal" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
              </div>
            </div>
          <form name="contactForm" id="contactForm">
            <div class="formData">
              <label class="form-label" for="firstName">Prénom</label>
              <input class="form-control" type="text" id="first" name="firstName" aria-labelledby="firstName"
              aria-required="true"/>
            </div>
            <div class="formData">
              <label class="form-label" for="lastName">Nom</label>
              <input class="form-control" type="text" id="last" name="lastName" aria-labelledby="lastName"
              aria-required="true"/>
            </div>
            <div class="formData">
              <label class="form-label" for="email">E-mail</label>
              <input class="form-control" type="email" id="email" name="email" aria-labelledby="email"
              aria-required="true"/>
            </div>
            <div class="formData">
              <label class="form-label" for="textArea">Votre message</label>
              <textarea name="contactTextArea" id="textContact" cols="30" rows="10"  aria-labelledby="textContact"
              aria-required="true"></textarea>
            </div>
          </form>
          <button class="contactBtn closeModal" type="submit" value="Envoyer">Envoyer</button>
        </div>
      </div>
    </div>`
  }
}

