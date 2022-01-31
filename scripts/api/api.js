class api{

    constructor(url) {
        this._url = url;
   }
 
   async get() {
        return fetch(this._url)
       .then((res) => res.json())
       .then((res) => res.data)
       .catch((err) => console.log("une erreur est survenue", err));
   }
 }
 

class MediaApi extends api {

   constructor(url) {
        super(url);
   }
 
   async getMedias() {
        return await this.get();
   }
}
