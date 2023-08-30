import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './searchMovie.module.css';

const SearchMovies = ({ onSearchSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

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
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleChange}
                    value={searchQuery} />
                <button type='submit' className={css.button}>Search</button>
            </form>
        </div>
    )
}

export default SearchMovies;