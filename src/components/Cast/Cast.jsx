import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getMovieCredits } from 'API/api-service';
import CastList from 'components/CastList/CastList'


const Cast = () => {
    const { movieId } = useParams();
    const [castResults, setCastResults] = useState(null);
    const [Error, setError] = useState('');

    useEffect(() => {
        const fetchMovieCast = async () => {
            setError('');
            try {
                const data = await getMovieCredits(movieId);
                setCastResults(data.cast);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
            }
        }
        fetchMovieCast()
    }, [Error, movieId])
    return (
        <>
            {castResults && <CastList castArray={castResults} />}
        </>
    )
}

export default Cast;