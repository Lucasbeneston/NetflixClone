const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "7570342a0ddc01d14364f312877712b3";

export async function fetchMovie(movieId) {
  const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}

export async function fetchNetflixOriginals() {
  const url = `${API_URL}discover/tv?api_key=${API_KEY}&with_networks=213`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}

export async function fetchTrending() {
    const url = `${API_URL}trending/movie/week?api_key=${API_KEY}`;
    let res = await fetch(url);
    let movie = await res.json();
    return movie;
}

export async function fetchTopRated() {
  const url = `${API_URL}movie/top_rated?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}

export async function fetchByGenreMovies(genre) {
  const url = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=${genre}`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}

export async function fetchModalNetflix(movieId) {
  const url = `${API_URL}tv/${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}



























//1
// export function fetchMovie(movieId, cb) {
//   // https://api.themoviedb.org/3/movie/550?api_key=7570342a0ddc01d14364f312877712b3
//   const url = `${API_URL}${movieId}?api_key=${API_KEY}`;
//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       return cb(JSON.parse(xhr_object.responseText));
//     }
// }

//2 ajout "promise"
// export function fetchMovie(movieId) {
//   const url = `${API_URL}${movieId}?api_key=${API_KEY}`;

//   return new Promise((resolve, reject) => {
//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       resolve(JSON.parse(xhr_object.responseText));
//     }
//   });
// }

//2BIS ajout "fetch()"
// export function fetchMovie(movieId) {
//   const url = `${API_URL}${movieId}?api_key=${API_KEY}`;
//   return fetch(url).then(res => {
//     return res.json()
//   }).then(movie => {
//       return movie;
//   })
// }

