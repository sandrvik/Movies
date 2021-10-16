import { showPopUp } from "./popup.js";
import { favourites } from "./favourites.js";

const moviesContainer = document.getElementById('movies');

export function spawnMovies(moviesData) {
    movies.innerHTML = '';
    if (moviesData.length === 0 || moviesData.size === 0) {
        const notFoundedMessage = document.createElement('h2');
        notFoundedMessage.innerText = 'Films not found';
        movies.append(notFoundedMessage);
    } else {
        moviesData.forEach(movie => createMovieCard(movie));
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