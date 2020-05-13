import { fetchMovie } from "./apiService.js";
import { fetchNetflixOriginals } from "./apiService.js";
import { fetchTrending } from "./apiService.js";
import { fetchTopRated } from "./apiService.js";
import { fetchByGenreMovies } from "./apiService.js";
import { genres } from "./data.js";
import { fetchModal } from "./apiService.js";

import Header from "./components/Header.mjs";
import {SectionNetflix} from "./components/Section.mjs";
import {SectionTrending} from "./components/Section.mjs";
import {SectionTopRated} from "./components/Section.mjs";
import {SectionGenre} from "./components/Section.mjs";
import Modal from './components/Modal.mjs';


(async () => {
  let movie = await fetchMovie(157336);
  document.getElementById("header").innerHTML = Header(movie);
  document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();


(async () => {
  let movie = await fetchNetflixOriginals();
  for (let i = 0; i < movie.results.length; i++) {
    let netflixRow = document.querySelector('#movies-row-netflix');
    if(movie.results[i].poster_path!== null){
      netflixRow.innerHTML += SectionNetflix(movie.results[i]);
    }
  }
  console.log(movie)
})();


(async () => {
  let movie = await fetchTrending();
  for (let i = 0; i < movie.results.length; i++) {
    let trendingRow = document.querySelector('#movies-row-trending');
    if(movie.results[i].backdrop_path!== null){
      trendingRow.innerHTML += SectionTrending(movie.results[i]);
    }
  }
})();


(async () => {
  let movie = await fetchTopRated();
  for (let i = 0; i < movie.results.length; i++) {
    let topratedRow = document.querySelector("#movies-row-toprated");
    if(movie.results[i].backdrop_path!== null){
      topratedRow.innerHTML += SectionTopRated(movie.results[i]);
    }
  }
})();


(async () => {
  let movie = await fetchByGenreMovies(genres.find(genre => genre.name === "Action").id);
  for (let i = 0; i < movie.results.length; i++) {
    let actionRow = document.querySelector("#movies-row-action");
    if(movie.results[i].backdrop_path!== null){
      actionRow.innerHTML += SectionGenre(movie.results[i]);
    }
  }
})();


(async () => {
  let movie = await fetchByGenreMovies(genres.find(genre => genre.name === "Comedy").id);
  for (let i = 0; i < movie.results.length; i++) {
    let actionRow = document.querySelector("#movies-row-comedy");
    if(movie.results[i].backdrop_path!== null){
      actionRow.innerHTML += SectionGenre(movie.results[i]);
    }
  }
})();


(async () => {
  let movie = await fetchByGenreMovies(genres.find(genre => genre.name === "Documentary").id);
  for (let i = 0; i < movie.results.length; i++) {
    let actionRow = document.querySelector("#movies-row-documentary");
    if(movie.results[i].backdrop_path!== null){
      actionRow.innerHTML += SectionGenre(movie.results[i]);
    }
  }
})();


(async () => {
  let movie = await fetchModal(13); // Comment utiliser l'id du film clické ?
  document.getElementById("modal-netflix").innerHTML = Modal(movie);
  document.getElementById("modal-netflix").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();















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