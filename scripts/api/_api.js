export class Api {

    url = './data/photographers.json'

    async get() {
        return fetch(this.url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }

    async getPhotograph(id) {
        return fetch(this.url)
            .then(res => res.json())
            .then(res => res.photographers.filter(p => p.id == id))
            .catch(err => console.log('an error occurs', err))

    }

    async getMediaApi() {
        return fetch(this.url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('an error occurs', err))
    }
}




