export class Photograph{
    url = ''

    getAllPhotograph(){
        fetch(this.url)
            .then (blob => blob.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    getOnePhotograph(){
        
    }

}