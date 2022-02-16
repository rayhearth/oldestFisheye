import { Photograph } from '../models/_photograph.js'
import { Media } from '../models/_media.js'

// let data = new Photograph()


let displayOnePhotograph = async () => {

    //recherche du photographe via son id 
    const urlParams = new URLSearchParams(window.location.search)
    //on appelle la methode get de Api et on recupère 'id'
    const urlId = urlParams.get('id')

    let photograph = new Photograph()
    let OnePhotograph = await photograph.getOnePhotograph(urlId)

    document.querySelector('#photographer').innerHTML = OnePhotograph

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {
    //test pour recup id via url et via media
    const photogtapherId = medias.filter (media => media.photogtapherId == urlId)

    let media = new Media()
    let AllMedias = await media.getAllMedia(photogtapherId)
    
    console.log(media)
    document.querySelector('.galleryContainer').innerHTML = AllMedias
}

window.addEventListener('load' , displayAllMedia())