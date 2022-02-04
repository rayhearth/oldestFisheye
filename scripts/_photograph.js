import { Api } from './_api.js'
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
            let photograph = await this.get()+id
            return photograph
        } catch (err) {
            console.log(err)
        }
    }


    // Render index
    renderAllPhotograph(photographs){
        let all = ''
        for(let photograph of photographs){
            all += this.renderOnePhotograph(photograph)
        }
        return all
    }

    renderOnePhotograph(photograph){

        return `<article class="photographer">
            <a href="photographer.html?id=${photograph.id}">
                <img class="img-profile" src="assets/images/photographers/${photograph.id}/${photograph.portrait}" alt="${photograph.name}">
                <h2 class="photographer-name">${photograph.name}</h2>
            </a>
            <p class="photographer-location">${photograph.city}, ${photograph.country}</p>
            <p class="photographer-tagline">${photograph.tagline}</p>
            <p class="photographer-price">${photograph.price}€/jour</p>
        </article>`
    }

    renderPhotographProfile (photograph){
        return ` 
        `
    }

}