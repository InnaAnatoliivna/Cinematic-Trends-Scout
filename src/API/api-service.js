import axios from "axios";

const key = 'b8038f0a7a9d99e63733d790c6805a39';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const getTrendingMovies = async () => {
    const { data } = await axios.get(`/trending/movie/day?api_key=${key}`);
    return data;
}

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
export const getSearchMovies = async (query) => {
    const { data } = await axios.get(`/search/movie?api_key=${key}&query=${query}`);
    return data;
}

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
export const getMoviesDetails = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${key}`);
    return data;
}

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
export const getMovieCredits = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}/credits?api_key=${key}`);
    return data;
}

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
export const getMovieReviews = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${key}`);
    return data;
}


// Приклад виклику функції для отримання повної інформації про фільм з ID = 12345 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const movieId = 12345;
// getMoviesDetails(movieId)
//     .then(movieDetails => {
//         console.log(movieDetails);
//     })
//     .catch(error => {
//         console.error('Помилка при отриманні інформації про фільм:', error);
//     });

// // Приклад виклику функції для пошуку фільмів за ключовим словом
// const query = 'Spider-Man';
// getSearchMovies(query)
//     .then(searchResults => {
//         console.log(searchResults);
//     })
//     .catch(error => {
//         console.error('Помилка при пошуку фільмів:', error);
//     });



