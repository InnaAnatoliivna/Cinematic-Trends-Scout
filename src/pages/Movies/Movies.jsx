import { useNavigate } from "react-router-dom";
import { getSearchMovies } from 'API/api-service';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import SearchMovies from "components/SearchMovies/SearchMovies";
import Loader from 'components/Loader/Loader';
import SearchResultsList from "components/SearchResultsList/SearchResultsList";


const Movies = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSearchMovies = async () => {
            setIsLoader(true);
            try {
                const data = await getSearchMovies(searchQuery);
                setSearchResults(data.results);
                // setSearchResults(data.map(({ id, title }) => ({ id, title })));
            }
            catch (error) {
                console.error(error.message);
            } finally {
                setIsLoader(false);
            }
        }
        fetchSearchMovies(searchQuery)
    }, [searchQuery]);

    const onSearchSubmit = query => setSearchQuery(query);

    return (
        <div>
            <Button handleClick={() => { navigate(-1) }}>Go back</Button>
            {isLoader && <Loader />}
            <SearchMovies onSearchSubmit={onSearchSubmit} />
            {searchResults && <SearchResultsList arrayResults={searchResults} />}
        </div>
    )
}

export default Movies;