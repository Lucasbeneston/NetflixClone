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
            <img src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
                class="movies__container--movie-image">
        </div>
          `;
}

export function SectionTopRated(props) {
    return `
    <div class="movies__container--movie__toprated">
        <img
            src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
            class="movies__container--movie-image"
        />
    </div>
        `;
}