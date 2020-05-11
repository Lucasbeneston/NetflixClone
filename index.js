import {fetchMovie} from "./apiService.js";
// import {fetchNetflixOriginals} from "./apiService.js";

import Header from "./components/Header.mjs";
// import Section from "./components/Section.mjs";

// (() => {
//   //Callback
//   const getResponse = (data) => {
//     return data;
//   };
//   try {
//     let movie = fetchMovie(157336, getResponse);
//     console.log(movie);
//     document.getElementById("header").innerHTML = Header(movie);
//     document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//   }
//   catch(e){
//     console.log(e)
//   }

// })();

// //2
// (() => {
//     let movie = fetchMovie(157336).then(movie => {
//         console.log(movie)
//         document.getElementById("header").innerHTML = Header(movie);
//         document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//     })

// })();

//3
(async () => {
    let movie = await fetchMovie(157336);
    console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

// (async () => {
//   let movie = await fetchNetflixOriginals(157336);
//   console.log(movie)
//   document.getElementsByClassName("movies-container").innerHTML = Section(movie);
//   document.getElementsByClassName("movies__container--movie__netflix").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`;
// })();