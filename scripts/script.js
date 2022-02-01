import { Photograph } from './_photograph.js'

let displayAllPhotograph = async () => {
    
    let photograph = new Photograph()
    let allPhotographs = await photograph.getAllPhotograph()
    
    document.querySelector('#photographer').innerHTML = allPhotographs
    
}

window.addEventListener('load', () => displayAllPhotograph())