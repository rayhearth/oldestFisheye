import { Photograph } from '../models/_photograph.js'
import { Media } from '../models/_media.js'

// let data = new Photograph()


//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

let displayOnePhotograph = async () => {


    let photograph = new Photograph()
    let OnePhotograph = await photograph.getOnePhotograph(urlId)

    document.querySelector('#photographer').innerHTML = OnePhotograph

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {

    
    let media = new Media()
    let AllMedias = await media.getAllMedia(urlId)
    
    console.log(media)
    document.querySelector('.galleryContainer').innerHTML = AllMedias
}

window.addEventListener('load' , displayAllMedia())