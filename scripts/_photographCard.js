export class photographCard {
    const data = "./data/photographers.json"

    getAllPhotograph(){
        fetch(this.data)
            .then (blob => blob.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    getOnePhotograph(){
        
    }

}