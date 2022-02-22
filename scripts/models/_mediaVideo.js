import { Api } from '../api/_api.js'

export class Video extends Api {
    constructor(media) {
        this._id = media.id
        this._photographerId = media.photographerId
        this._title = media.title
        this._video = media.video
        this._likes = media.likes
        this._date = media.date
        this._price = media.price
    }

    get id() {
        return this._id
    }

    get photographerId(){
        return this._photographerId
    }

    get title(){
        return this._title
    }

    get video() {
        return `./assets/photographers/${this._photographerId}/media/${this._video}`
    }

    
    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return this._price
    }

    
}