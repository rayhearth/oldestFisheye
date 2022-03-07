import { PhotographFactory } from '../factories/_photographFactory.js'
import { MediaFactory } from '../factories/_media.js'

// let data = new Photograph()


//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

let displayOnePhotograph = async () => {


    let photograph = new PhotographFactory()
    let OnePhotograph = await photograph.getOnePhotograph(urlId)

    document.querySelector('#photographer').innerHTML = OnePhotograph

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {

    
    let media = new MediaFactory()
    let AllMedias = await media.getAllMedia(urlId)

    document.querySelector('.galleryContainer').innerHTML = AllMedias
}

window.addEventListener('load' , displayAllMedia())