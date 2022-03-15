import { Api } from '../api/_api.js'
import { PhotographerPageCards, PhotographersIndexCards } from '../models/_photographersCards.js';

/*ma class Photograph hérite de ma class Api*/
export class PhotographFactory extends Api {

  /*méthode pour recupérer tous les photographes*/
  async getAllPhotograph() {
    try {
      /*on se met en attente des informations de note class API*/
      let photographs = await this.get()
      const photographerProfile = photographs.map(p => new PhotographersIndexCards(p))

      /*on retourne notre render*/
      return this.renderAllPhotograph(photographerProfile)
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
      all += photograph.renderOnePhotographer()
    }
    return all
  }


  /*méthode pour recupérer un seul photographe*/
  async getOnePhotograph(id) {
    //on appelle la methode getOnePhotographe et on lui transmet l'id du photographe
    try {
      let Onephotograph = await this.getPhotograph(id)
      // console.log(Onephotograph)
      //on instancie notre factory pour recuperer le html et on lui passe notre methode getPhotograph(id)
      let photographerprofile = new PhotographerPageCards(Onephotograph)
      // console.log(photographerprofile)
      //on cree notre render en lui passant notre photograph profile et on appelle notre methode
      let renderProfile = photographerprofile.renderPhotographHeader()
      // on retourne notre render final avec toutes les infos necessaires
      return renderProfile


    } catch (err) {
      console.log(err)
    }
  }
}