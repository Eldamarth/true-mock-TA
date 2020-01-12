const CONFIG = require('../../config.js');

const getListOfGenres = () => {
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${CONFIG.API_KEY}&language=en-US`;
    return fetch(URL)
        .then( (response) => response.json() );
}

const getFilmsAscendingRating = (GENRE) =>{
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${CONFIG.API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${GENRE}`;
    return fetch(URL)
        .then((response) => response.json() );
}

module.exports = {
    getListOfGenres,
    getFilmsAscendingRating

}