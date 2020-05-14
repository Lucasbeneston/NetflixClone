export function SectionNetflix(props) {
    return `
        <div class="movies__container--movie__netflix">
            <img src="https://image.tmdb.org/t/p/original/${props.poster_path}"
                class="movies__container--movie-image">
        </div>
          `;
}

export function SectionTrending(props) {
    if (props.backdrop_path !== null){
        return `
        <div class="movies__container--movie__trending">
            <img
                src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
                class="movies__container--movie-image"
            />
        </div>
            `;
    } else {
        return `
        <div class="movies__container--movie__trending">
            <img
                src="/img/default.jpg"
                class="movies__container--movie-image"
            />
        </div>`
    }
}

export function SectionTopRated(props) {
    if (props.backdrop_path == null){
        return `
        <div class="movies__container--movie__toprated">
            <img
                src="/img/default.jpg"
                class="movies__container--movie-image"
            />
        </div>`
    } else {
        return `
        <div class="movies__container--movie__toprated">
            <img
                src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
                class="movies__container--movie-image"
            />
        </div>
            `;
    }
}

export function SectionGenreAction(props) {
    if (props.backdrop_path == null){
        return `
        <div class="movies__container--movie__genreAction">
            <img
                src="/img/default.jpg"
                class="movies__container--movie-image"
            />
        </div>`
    } else {
        return `
        <div class="movies__container--movie__genreAction">
            <img
                src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
                class="movies__container--movie-image"
            />
        </div>
            `;
    }
}

export function SectionGenreComedy(props) {
    if (props.backdrop_path == null){
        return `
        <div class="movies__container--movie__genreComedy">
            <img
                src="/img/default.jpg"
                class="movies__container--movie-image"
            />
        </div>`
    } else {
        return `
        <div class="movies__container--movie__genreComedy">
            <img
                src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
                class="movies__container--movie-image"
            />
        </div>
            `;
    }
}

export function SectionGenreDocumentary(props) {
    if (props.backdrop_path == null){
        return `
        <div class="movies__container--movie__genreDocumentary">
            <img
                src="/img/default.jpg"
                class="movies__container--movie-image"
            />
        </div>`
    } else {
        return `
        <div class="movies__container--movie__genreDocumentary">
            <img
                src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
                class="movies__container--movie-image"
            />
        </div>
            `;
    }
}


export function SectionSearch(props) {
    if (props.backdrop_path == null){
    return `
        <div class="movies__container--movie__search">
            <img
                src="/img/default2.png"
                class="movies__container--movie-image"
            />
        </div>
          `;
    } else {
        return `
        <div class="movies__container--movie__search">
            <img
                src="https://image.tmdb.org/t/p/w500/${props.poster_path}"
                class="movies__container--movie-image"
            />
        </div>
            `;
    }
}