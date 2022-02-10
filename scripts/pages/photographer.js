import { MediaApi } from '../_api.js'
import { Photograph } from '../_photograph.js'


// let data = new Photograph()


let displayOnePhotograph = async () => {

    //recherche du photographe via son id 
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    console.log(id)

    let photograph = new Photograph()
    let OnePhotograph = await photograph.getOnePhotograph(id)

    document.querySelector('#photographer').innerHTML = getOnePhotograph

}

window.addEventListener('load', displayOnePhotograph())

