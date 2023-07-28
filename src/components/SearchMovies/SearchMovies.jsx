import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchMovies = ({ onSearchSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setSearchQuery(searchQuery);
    }, [searchQuery]);

    const handleChange = (e) => {
        setSearchQuery(e.currentTarget.value.toLowerCase().trim())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery === '') {
            alert('Enter a search query!');
            return
        }
        onSearchSubmit(searchQuery);
        navigate(`/movies?query=${searchQuery}`);
        setSearchQuery('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="Search-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleChange}
                    value={searchQuery} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchMovies;