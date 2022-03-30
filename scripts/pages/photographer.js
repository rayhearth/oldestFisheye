import { PhotographFactory } from '../factories/_photographFactory.js'
import { MediaFactory } from '../factories/_mediaFactory.js'
import { LightboxContain } from '../utils/lightbox.js'
// import { LightboxContain } from '../utils/lightbox.js'

// let data = new Photograph()


//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

let displayOnePhotograph = async () => {

    let photograph = new PhotographFactory()
    let OnePhotograph = await photograph.getOnePhotograph(urlId)

    document.querySelector('#photographer').innerHTML = OnePhotograph
    
    //on recupère le nom du photographe va le h1 et on l'injecte via l'id
    let name = document.querySelector('h1').textContent
    document.querySelector('#photographerName').innerHTML = name
    // on déclare nos sélecteurs et les events apres le chargement de la methode getOnePhotograph
    let openModalBtn = document.querySelector('#openModal')
    openModalBtn.addEventListener("click", openModal)
    
    let closeModalBtn = document.querySelectorAll('.closeModal')
    closeModalBtn.forEach(el => {
        el.addEventListener('click', closeModal)
    })

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {


    let media = new MediaFactory()
    // console.log(media)
    let AllMedias = await media.getAllMedia(urlId)

    document.querySelector('.galleryContainer').innerHTML = AllMedias
    document.querySelector('#light').innerHTML = media.light

    function getlightbox(){
        try{
            let lightboxData = document.querySelectorAll('.mediaLink')
            const data = lightboxData.map((d)=> new LightboxContain(d))
            return this.openLightbox(data)
        }catch (err){
            console.log(err)
        }
    }

    // let lightbox = new LightboxContain()
    // console.log(lightbox)
    // lightboxData.forEach(el =>{
    //     el.addEventListener('click', openLightbox)
    // })
    
    // console.log(lightboxData)
    // for(let i=0; i<lightboxData.childNodes.length; i++){
    //     lightboxData.childNodes[i].childNodes[0].addEventListener('click',function(){
    //         openLightbox()
    //         manageEvent()
    //     })
    // }

}

window.addEventListener('load', displayAllMedia())
// window.addEventListener('selectstart')
