export function SectionNetflix(props) {
    return `
        <div class="movies__container--movie__netflix">
            <img src="https://image.tmdb.org/t/p/original/${props.poster_path}"
                class="movies__container--movie-image">
        </div>
          `;
}

export function SectionTrending(props) {
    return `
        <div class="movies__container--movie__trending">
            <img src="https://image.tmdb.org/t/p/w500/${props.backdrop_path || "/wooZWiC4NWH0ahCSUOogEmVejHo.jpg"}"
                class="movies__container--movie-image">
        </div>
          `;
}

export function SectionTopRated(props) {
    return `
    <div class="movies__container--movie__toprated">
        <img
            src="https://image.tmdb.org/t/p/w500/${props.backdrop_path || "/wooZWiC4NWH0ahCSUOogEmVejHo.jpg"}"
            class="movies__container--movie-image"
        />
    </div>
        `;
}

export function SectionGenreAction(props) {
    return `
    <div class="movies__container--movie__genreAction">
        <img
            src="https://image.tmdb.org/t/p/w500/${props.backdrop_path || "/wooZWiC4NWH0ahCSUOogEmVejHo.jpg"}"
            class="movies__container--movie-image"
        />
    </div>
        `;
}

export function SectionGenreComedy(props) {
    return `
    <div class="movies__container--movie__genreComedy">
        <img
            src="https://image.tmdb.org/t/p/w500/${props.backdrop_path || "/wooZWiC4NWH0ahCSUOogEmVejHo.jpg"}"
            class="movies__container--movie-image"
        />
    </div>
        `;
}

export function SectionGenreDocumentary(props) {
    return `
    <div class="movies__container--movie__genreDocumentary">
        <img
            src="https://image.tmdb.org/t/p/w500/${props.backdrop_path || "/wooZWiC4NWH0ahCSUOogEmVejHo.jpg"}"
            class="movies__container--movie-image"
        />
    </div>
        `;
}

// "/img/default.jpg"