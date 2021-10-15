export const language = document.getElementById('lang');
export const genre = document.getElementById('genre');

export function filter(movies) {
    const filters = {
        'language': language.value,
        'genres': genre.value,
    }

    const filtersKeys = Object.keys(filters);

    const filtered = movies.filter(movie => {
        return filtersKeys.every(key => {
            return !filters[key] || filters[key] === movie[key] || movie[key].includes(filters[key]);
        })
    })

    return filtered;
}