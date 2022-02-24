import { Api } from "../_api"

export class FilterMediaAdapter extends Api {
    constructor(photographerId, Media) {
        this.Media = Media
        this.photographerId = photographerId
    }

    async filterByMedia() {
        return await getMediaApi.filterByMedia(this.media, this.photographerId)
    }
}