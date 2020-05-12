export default function Section(props) {
    return `
        <div class="movies__container--movie__netflix">
            <img src="https://image.tmdb.org/t/p/original/${props.poster_path}"
                class="movies__container--movie-image">
        </div>
          `;
}
