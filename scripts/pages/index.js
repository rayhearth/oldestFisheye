import { Photograph } from '../_photograph.js'


/*j'implémente ma méthode pour récup et afficher tout mes photographes*/

let displayAllPhotograph = async () => {
    
    let photograph = new Photograph()
    let allPhotographs = await photograph.getAllPhotograph()
    
    // on implemente la méthode allPhotographs ds la section ayant l'id '#photographer
    document.querySelector('#photographer').innerHTML = allPhotographs
    
}

window.addEventListener('load', () => displayAllPhotograph())