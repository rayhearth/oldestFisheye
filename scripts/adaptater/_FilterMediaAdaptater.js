import { MediaApi } from "../_api"

class FilterMediaAdapter {
    constructor(photographer, media) {
        this.Media = Media
        this.photographerId = this.photographerId
    }

    async filterByMedia() {
        return await MediaApi.filterByMedia(this.media, this.photographerId)
    }
}