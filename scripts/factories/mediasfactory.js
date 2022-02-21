import { Api } from '../api/_api.js'

export class MediasFactory extends Api {
    constructor(media,type) {
        if (type === 'image') {
            return new Api(media.image)
        }else if (type === 'video') {
            return new Api(media.video)
        }else {
            throw 'unkown format type'
        }
    }
}