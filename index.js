import { fetchMovie } from "./apiService.js";
import { fetchNetflixOriginals } from "./apiService.js";
import { fetchTrending } from "./apiService.js";
import { fetchTopRated } from "./apiService.js";


import Header from "./components/Header.mjs";
import {SectionNetflix} from "./components/Section.mjs";
import {SectionTrending} from "./components/Section.mjs";
import {SectionTopRated} from "./components/Section.mjs";

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
  document.getElementById("header").innerHTML = Header(movie);
  document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();


(async () => {
  let movie = await fetchNetflixOriginals();
  for (let i = 0; i < movie.results.length; i++) {
    let netflixRow = document.querySelector('#movies-row-netflix');
    netflixRow.innerHTML += SectionNetflix(movie.results[i]);
  }
})();

(async () => {
  let movie = await fetchTrending();
  for (let i = 0; i < movie.results.length; i++) {
    let netflixRow = document.querySelector('#movies-row-trending');
    netflixRow.innerHTML += SectionTrending(movie.results[i]);
  }
})();

// console.log(fetchTrending())


(async () => {
  let movie = await fetchTopRated();
  for (let i = 0; i < movie.results.length; i++) {
    let netflixRow = document.querySelector("#movies-row-toprated");
    netflixRow.innerHTML += SectionTopRated(movie.results[i]);
  }
})();


