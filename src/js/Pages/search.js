import { URL, getMovies } from "../Controllers/fetch.js";
import { spawnMovies } from "../Views/spawn.js";
import { language, genre } from "../Models/filter.js";
import { homeComp } from "./home.js";
import { handleCurrentLocation } from "../Models/router.js";


const search = document.getElementById('search');
const perPage = document.getElementById('perPage');
const paginationBlock = document.getElementById('pagination');
const searchField = document.getElementById('searchField');
const searchButton = document.getElementById('searchButton');
const favouritesHeader = document.getElementById('favouritesHeader');

let movies;

export async function searchComp() {
    if (!searchField.value) {
        homeComp();
    } else {
        movies = await getMovies(`${URL}search/shows?q=${searchField.value}`, 50);
        spawnMovies(movies, 10);

        paginationBlock.style.display = 'none';
        perPage.style.display = 'none';
        search.style.display = 'flex';
        favouritesHeader.style.display = 'none';

        const filterElements = document.getElementsByClassName('filters__select');
        for (let filterElement of filterElements) {
            filterElement.disabled = false;
        }

        language.addEventListener('change', () => spawnMovies(movies, Infinity))
        genre.addEventListener('change', () => spawnMovies(movies, Infinity))
    }
}

const handleSearchLocation = handleCurrentLocation('#/search', searchComp);
searchButton.addEventListener('click', handleSearchLocation);
searchField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleSearchLocation();
    }
})