export class Api {
    
     url = './data/photographers.json'
 
     async get() {
         return fetch(this.url)
             .then(res => res.json())
             .then(res => res.photographers)
             .catch(err => console.log('an error occurs', err))
     }
 }

 export class MediaApi {

    url ='./data/photographers.json'

    async get() {
        return fetch(this.url)
        .then(res => res.json())
        .then(res => res.media)
        .catch(err => console.log('an error occurs', err))
    }
 }
