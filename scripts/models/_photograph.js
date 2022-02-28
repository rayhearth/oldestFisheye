import { Api } from '../api/_api.js'

/*ma class Photograph hérite de ma class Api*/
export class Photograph extends Api {

  /*méthode pour recupérer tous les photographes*/
  async getAllPhotograph() {
    try {
      /*on se met en attente des informations de note class API*/
      let photographs = await this.get()
      /*on retourne notre render*/
      return this.renderAllPhotograph(photographs)
    } catch (err) {
      console.log(err)
    }
  }

  // Render index
  renderAllPhotograph(photographs) {
    /*variable qui recoit le template de renderOnePhotograph*/
    let all = ''
    // pour chacun des photographes récup le render
    for (let photograph of photographs) {
      all += this.renderOnePhotograph(photograph)
    }
    return all
  }

  /*html de rendu pour un photographe sur la page index*/
  renderOnePhotograph(photograph) {
    return `<article class="photographer-card">
            <a href="photographer.html?id=${photograph.id}">
                <img class="img-profile" src="assets/images/photographers/${photograph.id}/${photograph.portrait}" alt="${photograph.name}">
                <h2 class="photographer-name">${photograph.name}</h2>
            </a>
            <p class="photographer-location">${photograph.city}, ${photograph.country}</p>
            <p class="photographer-tagline">${photograph.tagline}</p>
            <p class="photographer-price">${photograph.price}€/jour</p>
        </article>`
  }


  /*méthode pour recupérer un seul photographe*/
  async getOnePhotograph(id) {
    //on appelle la methode getOnePhotographe et on lui transmet l'id du photographe
    try {
      let Onephotograph = await this.getPhotograph(id)
      return this.renderPhotographHeader(Onephotograph[0])
    } catch (err) {
      console.log(err)
    }
  }


  //Render photographProfileHeader
  renderPhotographHeader(photograph) {
    return ` <div class="photographer-header">
        <h1>${photograph.name}</h1>
        <div class="locationandtag">
          <p class="location">${photograph.city}, ${photograph.country}</p>
          <p class="tagline">${photograph.tagline}</p>
        </div>
        <button class="contact_button" id="contactBtn">Contactez-moi</button>
        <img class="img-profile" src="assets/images/photographers/${photograph.id}/${photograph.portrait}" alt="">
        </div>
      
      <div class="contactModal modal-open" id="contactModal">
        <div class="content">
            <div class="headerModal">
              <div class="title">
                <h2>Contactez-moi</h2>
                <p class="photographerName">${photograph.name}</p>
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