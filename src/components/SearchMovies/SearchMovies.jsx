import React, { useState } from 'react'

const SearchMovies = ({ onSearchSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

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
        // console.log(searchQuery)
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