import { URL, getMovies } from "./fetch.js";
import { spawnMovies } from "./spawn.js";
import { filter, language, genre } from "./filter.js";
import { homeComp } from "./home.js";


const search = document.getElementById('search');
const perPage = document.getElementById('perPage');
const paginationBlock = document.getElementById('pagination');

let movies;
let filtered;

export async function searchComp() {
    if (!searchField.value) {
        homeComp();
    } else {
        location.hash = '#/search'
        movies = await getMovies(`${URL}search/shows?q=${searchField.value}`, 50);
        filtered = filter(movies);
        spawnMovies(filtered);

        paginationBlock.style.display = 'none';
        perPage.style.display = 'none';
        search.style.display = 'flex';
        favouritesHeader.style.display = 'none';

        const filterElements = document.getElementsByClassName('filters__select');
        for (let filterElement of filterElements) {
            filterElement.disabled = false;
        }

        language.addEventListener('change', () => {
            filtered = filter(movies);
            spawnMovies(filtered);
        })

        genre.addEventListener('change', () => {
            filtered = filter(movies);
            spawnMovies(filtered);
        })
    }
}

searchButton.addEventListener('click', async (e) => {
    if (location.hash === '#/search') {
        searchComp();
    } else {
        location.hash = '#/search';
    }
})

searchField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (location.hash === '#/search') {
            searchComp();
        } else {
            location.hash = '#/search';
        }
    }
})