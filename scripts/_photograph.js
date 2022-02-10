import { Api } from './_api.js'
import { MediaApi } from './_api.js'

/*ma class Photograph hérite de ma class Api*/
export class Photograph extends Api {


    async getAllPhotograph() {
        try{
            let photographs = await this.get()
            return this.renderAllPhotograph(photographs)
        } catch (err) {
            console.log(err)
        }
    }

    async getOnePhotograph(id){
        try{
            let photograph = await this.get()+'/'+id
            return this.renderPhotographHeader(photograph)
        } catch (err) {
            console.log(err)
        }
    }

    // renderAllPhotographProfile(photographs){
    //     let all=''
    //     for(let photograph of photographs){
    //         all += this.renderAllPhotographProfile(photograph)
    //     }
    //     return all
    // }

    // Render index
    renderAllPhotograph(photographs){
        let all = ''
        for(let photograph of photographs){
            all += this.renderOnePhotograph(photograph)
        }
        return all
    }

    /*html de rendu pour un photographe sur la page index*/
    renderOnePhotograph(photograph){

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


    //Render photographProfileHeader
    renderPhotographHeader(photograph){
        return ` <div class="photographer-header">
        <h1>${photograph.name}</h1>
        <div class="locationandtag">
          <p class="location">${photograph.city}, ${photograph.country}</p>
          <p class="tagline">${photograph.tagline}</p>
        </div>
      </div>
      
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>

      <img class="img-profile" src="assets/images/photographers/${photograph.id}/${photograph.portrait}" alt="${photograph.name}">`
    }

}