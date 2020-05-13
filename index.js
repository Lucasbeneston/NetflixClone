import { fetchMovie } from "./apiService.js";
import { fetchNetflixOriginals } from "./apiService.js";
import { fetchTrending } from "./apiService.js";
import { fetchTopRated } from "./apiService.js";
import { fetchByGenreMovies } from "./apiService.js";
import { genres } from "./data.js";
import { fetchModalNetflix } from "./apiService.js";

import Header from "./components/Header.mjs";
import {SectionNetflix} from "./components/Section.mjs";
import {SectionTrending} from "./components/Section.mjs";
import {SectionTopRated} from "./components/Section.mjs";
import {SectionGenre} from "./components/Section.mjs";
import Modal from './components/Modal.mjs';


(async () => {
  let movie = await fetchMovie(11);
  document.getElementById("header").innerHTML = Header(movie);
  document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();


(async () => {
  let netflixOriginals = await fetchNetflixOriginals();
  let netflixRow = document.querySelector('#movies-row-netflix');
  let movies = netflixOriginals.results

  for (let i = 0; i < movies.length; i++) {

    if(movies[i].poster_path!== null){
      netflixRow.innerHTML += SectionNetflix(movies[i]);
    }

    let divModalNetflix = document.getElementById('modal-netflix');

    let imagesNetflix = document.getElementsByClassName('movies__container--movie__netflix');
    
    for (let i = 0; i < imagesNetflix.length; i++) {
    imagesNetflix[i].addEventListener('click', async(event) => {
      let id = movies[i].id;
      let modalNetflix = await fetchModalNetflix(id);  

      event.preventDefault();
      
      divModalNetflix.innerHTML = Modal(modalNetflix);
      divModalNetflix.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${modalNetflix.backdrop_path})`;
      divModalNetflix.style.transition = "0.75s";
  
      let button = divModalNetflix.querySelector('#modal__container-btnClose');
      button.addEventListener('click', (event) => {
        let modalContainer = document.querySelector('.modal__container');
        event.preventDefault();
        divModalNetflix.removeChild(modalContainer)
      })

    })
  }
}
})();


(async () => {
  let movie = await fetchTrending();
  for (let i = 0; i < movie.results.length; i++) {
    let trendingRow = document.querySelector('#movies-row-trending');
    if(movie.results[i].backdrop_path!== null){
      trendingRow.innerHTML += SectionTrending(movie.results[i]);
    }
    console.log(movie)
  }
})();


(async () => {
  let movie = await fetchTopRated();
  for (let i = 0; i < movie.results.length; i++) {
    let topratedRow = document.querySelector("#movies-row-toprated");
    if(movie.results[i].backdrop_path!== null){
      topratedRow.innerHTML += SectionTopRated(movie.results[i]);
    }
    console.log(movie)
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




// (async () => {
//   let movie = await fetchNetflixOriginals();

//   // let idMovie = movie.results.find(id => id).id
//   let idMovie = movie.results[4].id

//   let movies = fetchModal(idMovie);

//   document.addEventListener('click',()=> {
  
// // Séléctionner la div clické
 
// // Séléctioner l'Id de la div clické 
    
  
//   console.log("Console.log de idMovie : ", idMovie)
//   console.log("Console.log de movie : ", movie)
//   console.log("Console.log de movies : ", movies)

   
//    for (let i = 0; i < movie.results.length; i++) {

//      console.log(movie.results[i])
//      console.log(movie.results)

//      if (movie.results[i] === movie.results){
//       document.getElementById("modal-netflix").innerHTML = Modal(movie.results[i]);
//       document.getElementById("modal-netflix").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.results[i].backdrop_path})`;
//      }
//    }
//      })
// })();




// (async () => {
//   let movie = await fetchModal(13); // Comment utiliser l'id du film clické ?
//   document.getElementById("modal-netflix").innerHTML = Modal(movie);
//   document.getElementById("modal-netflix").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
// })();




















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