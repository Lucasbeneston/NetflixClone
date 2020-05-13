export default function Header(props) {
  return `
          <div class="header__container">
            <h1 class="header__container-heading">${props.original_title}</h1>
            <button class="header__container-btnPlay"><span>&#9658</span> Play </button>
    
            <button class="header__container-btnFavouriteList"><span>&#43;</span> My List </button>
            <p class="header__container-overview">${props.overview}</p>
          </div>
        `;
}


