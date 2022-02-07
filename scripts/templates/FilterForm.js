import { Photograph } from "../_photograph"

class FilterForm {
    constructor(Media) {
        this.Movies = Movies

        this.$wrapper = document.createElement('div')
        this.$filterFormWrapper = document.querySelector('.filter-form-wrapper')
        this.$mediasWrapper = document.querySelector('.media-wrapper')
    }

    async filterMedias(actor) {
        this.clearMoviesWrapper()

        /* Vous pourrez par la suite supprimer ces lignes */
        // const FilterLib = new FilterV1(this.Movies, actor)
        // const FilteredMovies = await FilterLib.filterByActor()

        const AdaptedFilterLib = new FilterMoviesAdapter(this.Medias, Photograph)
        const FilteredMedias = await AdaptedFilterLib.filterByMedia()

        FilteredMovies.forEach(Movie => {
            const Template = new MediaCard(Media)
            this.$mediasWrapper.appendChild(Template.createMediaCard())
        })
    }

    onChangeFilter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const actor = e.target.value
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
                    <option value="">Aucun filtre</option>
                    <option value="arnold">Popularité/option>
                    <option value="sylvester">Date</option>
                    <option value="sylvester">Titre</option>
                </select>
            </form>
        `

        this.$wrapper.innerHTML = filterForm
        this.onChangeFilter()

        this.$filterFormWrapper.appendChild(this.$wrapper)
    }
}