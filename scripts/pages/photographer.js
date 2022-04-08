import { PhotographFactory } from '../factories/_photographFactory.js'
import { MediaFactory } from '../factories/_mediaFactory.js'
import { LightboxContain } from '../utils/lightbox.js'

// let data = new Photograph()


//recherche du photographe via son id 
const urlParams = new URLSearchParams(window.location.search)
//on appelle la methode get de Api et on recupère 'id'
const urlId = urlParams.get('id')

let displayOnePhotograph = async () => {

    let photograph = new PhotographFactory()
    // console.log(photograph)
    let OnePhotograph = await photograph.getOnePhotograph(urlId)

    document.querySelector('#photographer').innerHTML = OnePhotograph

    //on recupère le nom du photographe va le h1 et on l'injecte via l'id
    let name = document.querySelector('h1').textContent
    document.querySelector('#photographerName').innerHTML = name
    
    let form = document.forms['contactForm']
    // on déclare nos sélecteurs et les events apres le chargement de la methode getOnePhotograph
    let openModalBtn = document.querySelector('#openModal')
    openModalBtn.addEventListener("click", openModal)

    let closeModalBtn = document.querySelectorAll('.closeModal')
    closeModalBtn.forEach(el => {
        el.addEventListener('click', closeModal)
    })

    // console.log(form)
    /*Validation form and listener*/

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(form.elements)
        // Expression for fields
        const verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
        const textFormat = /^[a-z\é\è\-\^\']{2,}$/i

        //Form flag validation
        let formFlag = true

        // Firstname - min 2 char & not empty
        if (!form.elements['first'].value.trim().match(textFormat)) {
            formFlag = false
            showFieldError(form.element['firstName'])
        } else {
            closeFieldError(form.element['firstName'])
        }

        // Lastname - min 2 char & not empty
        if (!form.elements['last'].value.trim().match(textFormat)) {
            formFlag = false
            showFieldError(form.element['firstName'])
        } else {
            closeFieldError(form.element['firstName'])
        }

        // email validity
        if (!form.elements['email'].value.trim().match(verifMail)) {
            formFlag = false
            showFieldError(form.element['firstName'])
        } else {
            closeFieldError(form.element['firstName'])
        }

        //Check validation errors
        if (!formFlag) {
            return false
        }
    })

}

window.addEventListener('load', displayOnePhotograph())

let displayAllMedia = async () => {


    let media = new MediaFactory()
    // console.log(media)
    let AllMedias = await media.getAllMedia(urlId)
    // let AllMediasLightbox = await media.getAllMedia(urlId)
    // console.log(AllMedias)

    document.querySelector('.galleryContainer').innerHTML = AllMedias.gallery
    document.querySelector('.lightbox-media').innerHTML = AllMedias.lightrender


    // document.querySelector('#light').innerHTML = media.light

    // let lightboxData = document.querySelectorAll('.mediaLink')



    // function getlightbox(){
    //     try{
    //         let lightboxData = document.querySelectorAll('.mediaLink')
    //         const data = lightboxData.map((d)=> new LightboxContain(d))
    //         return this.openLightbox(data)
    //     }catch (err){
    //         console.log(err)
    //     }
    // }

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
