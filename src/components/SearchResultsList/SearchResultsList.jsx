import React from 'react'

const SearchResultsList = ({ searchResults }) => {
    return (
        <ul>
            {searchResults.map(movie => {
                return (
                    <li key={movie.id} movieId={movie.id}>
                        {movie.title}
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResultsList