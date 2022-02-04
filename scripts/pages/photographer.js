import { Photograph } from '../_photograph.js'


let data = new Photograph()

let displayPhotograph = async() => {
    const urlParams = new URLSearchParams (window.location.search)
    const id = urlParams.get('id')
    console.log(id)

    let photograph = await data.getOnePhotograph(id)

    /*Mise en place du visuel header photograph*/
    let headerCtn = document.querySelector('.photograph-header')
    let h1 = document.createElement('h1')
}

window.addEventListener ('load', displayPhotograph())

