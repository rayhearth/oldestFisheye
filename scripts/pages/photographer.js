import { Photograph } from '../models/_photograph.js'
import { Media } from '../models/_media.js'

// let data = new Photograph()


let displayOnePhotograph = async () => {

    //recherche du photographe via son id 
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')

    let photograph = new Photograph()
    let OnePhotograph = await photograph.getOnePhotograph(id)

    document.querySelector('#photographer').innerHTML = OnePhotograph

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {

    let media = new Media()
    let allMedias = await media.getMediaApi()

    document.querySelector('gallery.container').innerHTML = allMedias
}

window.addEventListener('load', () => displayAllMedia())