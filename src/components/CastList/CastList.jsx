import React from 'react';
import { getPosterMovie } from 'API/api-service';
import defaultImage from 'defaultImageActor.png';
import css from 'components/CastList/CastList.module.css';

const CastList = ({ castArray }) => {

    const getPoster = (path) => {
        return path ? getPosterMovie(path) : defaultImage
    }

    return (
        <ul className={css.list}>
            {castArray.map(cast => {
                return (
                    <li key={cast.cast_id} className={css.item}>
                        <img
                            src={getPoster(cast.profile_path)}
                            alt={cast.name}
                            width={150}
                        />
                        <p>{cast.name}</p>
                        <p>Character: {cast.character}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default CastList