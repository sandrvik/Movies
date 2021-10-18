import { showPopUp } from "./popup.js";
import { favourites } from "./favourites.js";
import { filter } from "./filter.js";

const moviesContainer = document.getElementById('movies');

export function spawnMovies(moviesData, perPageValue, filtration = true) {
    const filteredData = filtration ? filter(moviesData) : moviesData;
    moviesContainer.innerHTML = '';
    if (filteredData.length === 0) {
        const notFoundedMessage = document.createElement('h2');
        notFoundedMessage.innerText = 'Films not found';
        moviesContainer.append(notFoundedMessage);
    } else {
        filteredData.slice(0, perPageValue).forEach(movie => createMovieCard(movie));
    }
}

function createMovieCard(movie) {
    const card = document.createElement('li');
    card.setAttribute('class', 'card');
    card.setAttribute('data-id', movie.id);
    card.info = movie;

    const img = document.createElement('img');
    img.setAttribute('class', 'card__img');
    img.style.width = '200px';
    img.style.height = '280px';
    img.src = movie.image?.medium || './assets/images/noImageAvailable.jpg';

    img.addEventListener('click', showPopUp);

    const like = document.createElement('img');
    like.setAttribute('class', 'card__heart');
    if (favourites.has(`${movie.id}`)) {
        like.src = './assets/icomoon/SVG/heart.svg';
    } else {
        like.src = './assets/icomoon/SVG/heart-outlined.svg';
    }

    card.append(img);
    card.append(like);
    moviesContainer.appendChild(card);
}