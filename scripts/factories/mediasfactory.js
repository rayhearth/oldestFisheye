import { Api } from '../api/_api.js'
import { MediaImage } from '../models/_mediaImg.js'
import { MediaVideo } from '../models/_mediaVideo.js'

export class MediasFactory {
    constructor(media, type) {
        if (type === 'MediaImage') {
            return new MediaImage
        } else if (type === 'Mediavideo') {
            return new Mediavideo
        } else {
            throw 'unkown format type'
        }
    }
}