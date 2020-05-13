  export default function Modal(props) {
    return `
            <div class="modal__container">
            <button id="modal__container-btnClose">X</button>
              <h2 class="modal__container-heading">${props.original_title || props.name}</h2>
              

              <div class="modal__container-informations">
                <p class="modal__container-informations-p"> Rating: ${props.vote_average * 10}% </p>
                <p class="modal__container-informations-p"> Relase date: ${props.release_date || props.first_air_date}</p>
                <p class="modal__container-informations-p"> Runtime: ${props.runtime}</p>
              </div>
              
              <p class="modal__container-overview">${props.overview}</p>

                <button class="modal__container-btnPlay"><span>&#9658</span> Play </button>
                <button class="modal__container-btnFavouriteList"><span>&#43;</span> My List </button>
            </div>
          `;
  }