import { URL, getMovies } from "./fetch.js";
import { spawnMovies } from "./spawn.js";
import { language, genre } from "./filter.js";
import { page } from "./pagination.js";

const header = document.getElementById('header');
const main = document.getElementById('main');
const paginationBlock = document.getElementById('pagination');
const loginForm = document.getElementById('loginForm');
const perPage = document.getElementById('perPage');
const search = document.getElementById('search');
const favouritesHeader = document.getElementById('favouritesHeader');

let movies;

export async function homeComp() {
    location.hash = '#/';
    header.style.display = "block";
    main.style.display = "block";
    loginForm.style.display = "none";
    movies = await getMovies(`${URL}shows?page=${page - 1}`, 50);
    spawnMovies(movies, perPage.value);

    paginationBlock.style.display = 'block';
    perPage.style.display = 'inline';
    search.style.display = 'flex';
    favouritesHeader.style.display = 'none';

    const filterElements = document.getElementsByClassName('filters__select');
    for (let filterElement of filterElements) {
        filterElement.disabled = false;
    }

    language.addEventListener('change', () => spawnMovies(movies, perPage.value))
    genre.addEventListener('change', () => spawnMovies(movies, perPage.value))
    perPage.addEventListener('change', () => spawnMovies(movies, perPage.value))
}