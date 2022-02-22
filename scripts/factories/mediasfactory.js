// import { Api } from '../api/_api.js'
import { MediaImage } from '../models/_mediaImg.js'
import { MediaVideo } from '../models/_mediaVideo.js'

export class MediasFactory {
    constructor(media, type) {
        if (type === 'MediaImage') {
            return new MediaImage(media)
        } else if (type === 'MediaVideo') {
            return new MediaVideo(media)
        } else {
            throw 'unkown format type'
        }
    }
}