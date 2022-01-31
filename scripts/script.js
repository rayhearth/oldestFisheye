import { photographCard } from './_photographCard.js'


let displayAllPhotograph = () => {

    let _photographCard = new photographCard
    photographCard.getAllPhotograph()
    let container = document.querySelector('#photographer')
    
}

window.addEventListener('load', () => displayAllPhotograph())