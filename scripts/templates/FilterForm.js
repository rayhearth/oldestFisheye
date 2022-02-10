import { FilterMediaAdapter } from "../_FilterMediaAdaptater"

class FilterForm {
    constructor(Media) {
        this.Media = Media

        this.$wrapper = document.createElement('div')
        this.$filterFormWrapper = document.querySelector('.filter-form-wrapper')
        this.$mediasWrapper = document.querySelector('.media-wrapper')
    }

    async filterMedias(media) {
        this.clearMediasWrapper()

        /* Vous pourrez par la suite supprimer ces lignes */
        // const FilterLib = new FilterV1(this.Movies, actor)
        // const FilteredMovies = await FilterLib.filterByActor()

        const AdaptedFilter = new FilterMediasAdapter(this.Medias, Photograph)
        const FilteredMedias = await AdaptedFilter.filterByMedia()

        FilteredMedias.forEach(Media => {
            const Template = new MediaCard(Media)
            this.$mediasWrapper.appendChild(Template.createMediaCard())
        })
    }

    onChangeFilter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const media = e.target.value
                this.filterMedias(media)
            })
    }

    clearMediasWrapper() {
        this.$mediasWrapper.innerHTML = ""
    }

    render() {
        const filterForm = `
        <form class="filter-form" action="#" method="POST">
        <label for="filter-select">Trier par : </label>
        <select name="filter-select" id="filter-select">
            <option value="Popularite">Popularité</option>
            <option value="Date">Date</option>
            <option value="Titre">Titre</option>
        </select>
    </form>
        `

        this.$wrapper.innerHTML = filterForm
        this.onChangeFilter()

        this.$filterFormWrapper.appendChild(this.$wrapper)
    }
}