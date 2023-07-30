import React, { useSearchParams } from "react-router-dom";
import { getSearchMovies } from 'API/api-service';
import { useState, useEffect } from 'react';
import SearchMovies from "components/SearchMovies/SearchMovies";
import Loader from 'components/Loader/Loader';
import SearchResultsList from "components/SearchResultsList/SearchResultsList";


const Movies = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [searchParams] = useSearchParams();

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
    //============================>>>>>>>>>>>>>>>>>>>
    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);
    useEffect(() => {
        searchParams.set('query', searchQuery);
    }, [searchParams, searchQuery]);
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const onSearchSubmit = query => setSearchQuery(query);

    return (
        <div>
            {isLoader && <Loader />}
            <SearchMovies onSearchSubmit={onSearchSubmit} />
            {searchResults &&
                <SearchResultsList arrayResults={searchResults} />
            }
        </div>
    )
}

export default Movies;