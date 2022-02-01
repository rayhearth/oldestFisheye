import { Photograph } from './_photograph.js'
import { Api } from './_api.js'

let displayAllPhotograph = async () => {
    
    let photograph = new Photograph()
    let allPhotographs = await photograph.getAllPhotograph()
    
    document.querySelector('#photographer').innerHTML = allPhotographs
    
}

window.addEventListener('load', () => displayAllPhotograph())