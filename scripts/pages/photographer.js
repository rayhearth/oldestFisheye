import { Photograph } from '../_photograph.js'


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

