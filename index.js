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
  console.log(movie)
})();


(async () => {
  let movie = await fetchNetflixOriginals();
  let netflixRow = document.querySelector('#movies-row-netflix');
  let movies = movie.results

  for (let i = 0; i < movies.length; i++) {
    if(movies[i].poster_path!== null){
      netflixRow.innerHTML += SectionNetflix(movies[i]);
    }

    let divModalNetflix = document.getElementById('modal-netflix');
    let images = document.getElementsByClassName('movies__container--movie__netflix');
    
    for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', async(event) => {
      let id = movies[i].id;
      let modalNetflix = await fetchModalNetflix(id);  
      event.preventDefault();
      divModalNetflix.innerHTML = Modal(modalNetflix);
      divModalNetflix.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${modalNetflix.backdrop_path})`;
      divModalNetflix.style.backgroundSize = 'cover';
      divModalNetflix.style.marginTop = '-5.5vh';
      divModalNetflix.style.transition = "0.75s";
  
      let button = divModalNetflix.querySelector('#modal__container-btnClose');
      button.addEventListener('click', (event) => {
        // let modalContainer = document.querySelector('.modal__container');
        // divModalNetflix.removeChild(modalContainer)
        event.preventDefault();
        divModalNetflix.innerHTML = "";
      })
    })
  }
}
})();


(async () => {
  let movie = await fetchTrending();
  let trendingRow = document.querySelector('#movies-row-trending');
  let movies = movie.results

  for (let i = 0; i < movies.length; i++) {
    if(movie.results[i].backdrop_path!== null){
      trendingRow.innerHTML += SectionTrending(movie.results[i]);
    }

    let divModalTrending = document.getElementById('modal-trending');
    let images = document.getElementsByClassName('movies__container--movie__trending');
    
    for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', async(event) => {
      let id = movies[i].id;
      let modalTrending = await fetchMovie(id);  
      event.preventDefault();
      divModalTrending.innerHTML = Modal(modalTrending);
      divModalTrending.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${modalTrending.backdrop_path})`;
      divModalTrending.style.backgroundSize = 'cover';
      divModalTrending.style.marginTop = '-2vh';
      divModalTrending.style.transition = "0.75s";
  
      let button = divModalTrending.querySelector('#modal__container-btnClose');
      button.addEventListener('click', (event) => {
        // let modalContainer = document.querySelector('.modal__container');
        // divModalTrending.removeChild(modalContainer)
        event.preventDefault();
        divModalTrending.innerHTML = "";
      })
    })
  }
  }
})();


(async () => {
  let movie = await fetchTopRated();
  let topratedRow = document.querySelector("#movies-row-toprated");
  let movies = movie.results

  for (let i = 0; i < movies.length; i++) {
    topratedRow.innerHTML += SectionTopRated(movies[i]);

    if(movies[i].backdrop_path === null){
      // Afficher une image par défaut
    }

    let divModalToprated = document.getElementById('modal-toprated');
    let images = document.getElementsByClassName('movies__container--movie__toprated');
    
    for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', async(event) => {
      let id = movies[i].id;
      let modalToprated = await fetchMovie(id);  
      event.preventDefault();
      divModalToprated.innerHTML = Modal(modalToprated);
      divModalToprated.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${modalToprated.backdrop_path})`;
      divModalToprated.style.backgroundSize = 'cover';
      divModalToprated.style.marginTop = '-2vh';
      divModalToprated.style.transition = "0.75s";
  
      let button = divModalToprated.querySelector('#modal__container-btnClose');
      button.addEventListener('click', (event) => {
        // let modalContainer = document.querySelector('.modal__container');
        // divModalToprated.removeChild(modalContainer)
        event.preventDefault();
        divModalToprated.innerHTML = "";
      })
    })
  }
  }
})();


(async () => {
  let movie = await fetchByGenreMovies(genres.find(genre => genre.name === "Action").id);
  let action = document.querySelector("#movies-row-action");
  let movies = movie.results

  for (let i = 0; i < movies.length; i++) {
    action.innerHTML += SectionGenre(movies[i]);

    if(movies[i].backdrop_path === null){
      // Afficher une image par défaut
    }
    let divModalAction = document.getElementById('modal-action');
    let images = document.getElementsByClassName('movies__container--movie__genre');
    
    for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', async(event) => {
      let id = movies[i].id;
      let modalAction = await fetchModalNetflix(id);  
      event.preventDefault();
      divModalAction.innerHTML = Modal(modalAction);
      divModalAction.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${modalAction.backdrop_path})`;
      divModalAction.style.backgroundSize = 'cover';
      divModalAction.style.marginTop = '-2vh';
      divModalAction.style.transition = "0.75s";
  
      let button = divModalAction.querySelector('#modal__container-btnClose');
      button.addEventListener('click', (event) => {
        // let modalContainer = document.querySelector('.modal__container');
        // divModalToprated.removeChild(modalContainer)
        event.preventDefault();
        divModalAction.innerHTML = "";
      })
    })
  }
  }
})();


(async () => {
  let movie = await fetchByGenreMovies(genres.find(genre => genre.name === "Comedy").id);
  let comedy = document.querySelector("#movies-row-comedy");
  let movies = movie.results

  for (let i = 0; i < movies.length; i++) {
      comedy.innerHTML += SectionGenre(movies[i]);

      if(movies[i].backdrop_path === null){
        // Afficher une image par défaut
      }

      let divModalComedy = document.getElementById('modal-comedy');
      let images = document.getElementsByClassName('movies__container--movie__genre');
      
      for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', async(event) => {
        let id = movies[i].id;
        let modalComedy = await fetchModalNetflix(id);  
        event.preventDefault();
        divModalComedy.innerHTML = Modal(modalComedy);
        divModalComedy.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${modalComedy.backdrop_path})`;
        divModalComedy.style.backgroundSize = 'cover';
        divModalComedy.style.marginTop = '-2vh';
        divModalComedy.style.transition = "0.75s";
    
        let button = divModalComedy.querySelector('#modal__container-btnClose');
        button.addEventListener('click', (event) => {
          // let modalContainer = document.querySelector('.modal__container');
          // divModalToprated.removeChild(modalContainer)
          event.preventDefault();
          divModalComedy.innerHTML = "";
        })
      })
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