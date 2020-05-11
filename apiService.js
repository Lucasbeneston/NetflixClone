const APÎ_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "2997c5290abfb556adf35db19e36cc28";

//1
export function fetchMovie(movieId, cb) {
  const url = ``;

    var xhr_object = new XMLHttpRequest();
    xhr_object.open("GET", url, false);
    xhr_object.send(null);

    if (xhr_object.readyState == 4) {
      return cb(JSON.parse(xhr_object.responseText));
    }
  
}

//2
// export default function fetchMovie(movieId) {
//   const url = ``;

//   return new Promise((resolve, reject) => {
//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       resolve(JSON.parse(xhr_object.responseText));
//     }
//   });
// }

// export default function fetchMovie(movieId) {
//   const url = ``;
//   return fetch(url).then(res => {
//     return res.json()
//   }).then(movie => {
//       return movie;
//   })
// }

//3
// export default async function fetchMovie(movieId) {
//   const url = ``;
//   let res = await fetch(url);
//   let movie = await res.json();
//   console.log(movie);
//   return movie;
// }

export function fetchNetflixOriginals() {
  const url = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
}

export function fetchTrending() {}

export function fetchTopRated() {}

export function fetchByGenreMovies(genre) {}
