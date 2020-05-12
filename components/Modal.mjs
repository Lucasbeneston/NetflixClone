export default function Modal(props) {
    return `
            <div class="modal__container">
              <h2 class="modal__container-heading">${props.original_title}</h2>
              <div class="modal__container-informations">
                <p class="modal__container-informations-p">${props.popularity}</p>
                <p class="modal__container-informations-p">${props.release_date}</p>
                <p class="modal__container-informations-p">${props.runtime}</p>
              </div>
              
              <p class="modal__container-overview">${props.overview}</p>

                <button class="modal__container-btnPlay"> Play </button>
                <button class="modal__container-btnFavouriteList"> My List </button>
            </div>
          `;
  }