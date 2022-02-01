export class Photograph {

    url = './_api.js'

    //import { Api } from './_api.js'//

    async getAllPhotograph() {
        try{
            let blob = await fetch(this.url)
            let photographs = await blob.json()
            return this.renderAllPhotograph(photographs)
        } catch (err) {
            console.log(err)
        }
        // fetch(this.url)
        //     .then (blob => blob.json())
        //     .then(data => {
        //         return data
        //     })
        //     .catch(err => console.log(err))
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
        return '<article class="photographer">
            <a href="photographer.html?id=_id">
                <img src="${this._portrait}" alt="${this._name}">
                <h2 class="photographer-name">"${this._name}"</h2>
            </a>
            <p class="photographer-location">"${this._country}", "${this._city}"</p>
            <p class="photographer-tagline">"${this._tagline}"</p>
            <p class="photographer-price">"${this._price}"</p>
      </article>'
    }

}