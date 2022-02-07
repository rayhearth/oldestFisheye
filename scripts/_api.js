export class Api {
    
     url = './data/photographers.json'
 
     async get() {
         return fetch(this.url)
             .then(res => res.json())
             .then(res => res.photographers)
             .catch(err => console.log('an error occurs', err))
     }
 }

 class MediaApi extends Api {

    constructor (url){
        super (url)
    }

    async getMedia(){
        return await this.get()
    }
 }
