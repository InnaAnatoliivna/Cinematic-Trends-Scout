import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { getMoviesDetails, getSearchMovies } from 'API/api-service';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import MovieDetails from "components/MovieDetails/MovieDetails";
import SearchMovies from "components/SearchMovies/SearchMovies";
import Loader from 'components/Loader/Loader';
import SearchResultsList from "components/SearchResultsList/SearchResultsList";


const Movies = ({ searchQuery }) => {
    const { movieId } = useParams();
    // const [searchParams, setSearchParams] = useSearchParams();

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [Error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const [searchQueryMovie, setSearchQueryMovie] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoader(true);
            setError('');
            // console.log(movieId)
            try {
                const data = await getMoviesDetails(movieId);
                // console.log(data);
                setSelectedMovie(data);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
                // console.error(error.message);
            } finally {
                setIsLoader(false);
            }
        }
        fetchMovieDetails()
    }, [movieId, Error])

    // useEffect(() => {
    //     setSearchQueryMovie(searchQuery);
    // }, [searchQuery]);

    useEffect(() => {
        const fetchSearchMovies = async (query) => {
            // if (searchQuery !== '') {
            setIsLoader(true);
            setError('');
            console.log('fetchSearchMovies !!!!!!!!!!!!!!!!!!!!!!!');

            try {
                console.log(searchQuery);
                const { data } = await getSearchMovies(searchQuery);
                console.log(data);
                // searchResults(data);
                // searchResults(data.map(({ id, title }) => ({ id, title })));
            }
            catch (error) {
                setError(error.message);
                // console.log(Error)
                // console.error(error.message);
            } finally {
                setIsLoader(false);
            }
            // }
        }
        fetchSearchMovies(searchQuery)
    }, [searchQuery, searchResults]);


    return (
        <div>
            <Button handleClick={() => { navigate(-1) }}>Go back</Button>
            {selectedMovie ? (<MovieDetails selectedMovie={selectedMovie} />)
                : (< SearchMovies />)
            }
            {isLoader && <Loader />}
            <SearchResultsList searchResults={searchResults} />
        </div>
    )
}

export default Movies;