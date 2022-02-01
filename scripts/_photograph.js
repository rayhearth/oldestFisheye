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

    getOnePhotograph(){
        
    }

    renderAllPhotograph(photographs){
        let all = ''
        for(let photograph of photographs){
            all += this.renderOnePhotograph(photograph)
        }
        return all
    }

    renderOnePhotograph(photograph){
        console.log(photograph)
        return `<article class="photographer">
            <a href="photographer.html?id=${photograph.id}">
                <img src="assets/images/photographers/${photograph.id}/${photograph.portrait}" alt="${photograph.name}">
                <h2 class="photographer-name">"${photograph.name}"</h2>
            </a>
            <p class="photographer-location">"${photograph.country}", "${photograph.city}"</p>
            <p class="photographer-tagline">"${photograph.tagline}"</p>
            <p class="photographer-price">"${photograph.price}"</p>
      </article>`
    }

}