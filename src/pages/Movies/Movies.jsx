import { useNavigate } from "react-router-dom";
import { getSearchMovies } from 'API/api-service';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
// import MovieDetails from "components/MovieDetails/MovieDetails";
import SearchMovies from "components/SearchMovies/SearchMovies";
import Loader from 'components/Loader/Loader';
// import MovieDetails from "components/MovieDetails/MovieDetails";
import SearchResultsList from "components/SearchResultsList/SearchResultsList";


const Movies = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const navigate = useNavigate();

    // useEffect(() => {
    //     setSearchQueryMovie(searchQuery);
    // }, [searchQuery]);

    useEffect(() => {
        const fetchSearchMovies = async () => {
            // if (searchQuery !== '') {
            setIsLoader(true);
            console.log('fetchSearchMovies !!!!!!!!!!!!!!!!!!!!!!!');

            try {
                console.log(searchQuery);
                const data = await getSearchMovies(searchQuery);
                console.log(data);
                setSearchResults(data.results);
                // setSearchResults(data.map(({ id, title }) => ({ id, title })));
            }
            catch (error) {
                console.error(error.message);
            } finally {
                setIsLoader(false);
            }
            // }
        }
        fetchSearchMovies(searchQuery)
    }, [searchQuery]);

    const onSearchSubmit = (query) => {
        setSearchQuery(query);
        console.log(query)
    };

    return (
        <>
            <div>
                <Button handleClick={() => { navigate(-1) }}>Go back</Button>
                {/* {selectedMovie ? (<MovieDetails selectedMovie={selectedMovie} />)
                    : (< SearchMovies onSearchSubmit={onSearchSubmit} />)
                } */}
                {isLoader && <Loader />}
                <SearchMovies onSearchSubmit={onSearchSubmit} />
                {searchResults && <SearchResultsList arrayResults={searchResults} />}
            </div>
            {/* <Routes>

            </Routes> */}
        </>
    )
}

export default Movies;