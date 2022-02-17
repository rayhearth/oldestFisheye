import { Api } from "../_api"

export class FilterMediaAdapter extends Api {
    constructor(photographerId, Media) {
        this.Media = Media
        this.photographerId = this.photographerId
    }

    async filterByMedia() {
        return await MediaApi.filterByMedia(this.media, this.photographerId)
    }
}