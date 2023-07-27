import React from 'react';
import { getPosterMovie } from 'API/api-service';
// import defaultImage from 'defaultImageActor.png'

const CastList = ({ castArray }) => {
    return (
        <ul>
            {castArray.map(cast => {
                return (
                    <li key={cast.cast_id}>
                        {cast.profile_path &&
                            (<img
                                src={getPosterMovie(cast.profile_path)}
                                alt={cast.name}
                                width={150}
                            />)}
                        <p>{cast.name}</p>
                        <p>Character: {cast.character}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default CastList