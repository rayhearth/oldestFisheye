import { Photograph } from '../_photograph.js'


let data = new Photograph()

let displayPhotograph = async() => {
    const urlParams = new URLSearchParams (window.location.search)
    const id = urlParams.get('id')
    console.log(id)

    let photograph = await data.getOnePhotograph(id)

}

window.addEventListener ('load', displayPhotograph())

