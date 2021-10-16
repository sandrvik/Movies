export const URL = 'https://api.tvmaze.com/';

const pickKeysFromObject = (obj, ...keys) => {
    const pickedKeys = keys.filter(key => key in obj).map(key => [key, obj[key]]);
    return Object.fromEntries(pickedKeys);
}

const pickMoviesKeys = (movies, arr) => {
    return movies.map(m => pickKeysFromObject(m.show || m._embedded?.show || m, ...arr));
}

export async function getMovies(url, count) {
    try {
        const rowData = await fetch(url);
        const data = await rowData.json();
        const slicedData = data.slice(0, count);
        const preparedMovies = pickMoviesKeys(slicedData, ['language', 'genres', 'name', 'image', 'summary', 'premiered', 'id']);
        return preparedMovies;
    } catch (error) {
        console.log('Error:', error);
    }
}