import { spawnMovies } from "./spawn.js";

const header = document.getElementById('header');
const main = document.getElementById('main');
const pagination = document.getElementById('pagination');
const search = document.getElementById('search');
const favouritesHeader = document.getElementById('favouritesHeader');

export let favourites;

if (localStorage.getItem('favs')) {
    favourites = new Map(JSON.parse(localStorage.getItem('favs')));
} else {
    favourites = new Map();
}

export function favouritesComp() {
    header.style.display = "block";
    main.style.display = "block";
    pagination.style.display = 'none';
    search.style.display = 'none';
    favouritesHeader.style.display = 'block';
    const filterElements = document.getElementsByClassName('filters__select');
    for (let filterElement of filterElements) {
        filterElement.disabled = true;
    }
    spawnMovies(Array.from(favourites.values()), Infinity, false);
}

function updateLocalStorage(map, storage) {
    localStorage.setItem(storage, JSON.stringify([...map]));
}

export function handleFavourites(className, favourites, storage) {
    return function (e) {
        if (e.target.classList.contains(className)) {
            const id = e.target.parentNode.dataset.id;
            const info = e.target.parentNode.info;
            if (favourites.has(id)) {
                favourites.delete(id);
                updateLocalStorage(favourites, storage);
                e.target.src = './assets/icomoon/SVG/heart-outlined.svg';
            } else {
                favourites.set(id, info);
                e.target.src = './assets/icomoon/SVG/heart.svg';
                updateLocalStorage(favourites, storage);
            }
        }
    }
}

const heartClick = handleFavourites('card__heart', favourites, 'favs');
document.addEventListener('click', heartClick);