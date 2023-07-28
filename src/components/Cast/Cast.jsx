import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getMovieCredits } from 'API/api-service';
import CastList from 'components/CastList/CastList';
import Loader from 'components/Loader/Loader';

const Cast = () => {
    const { movieId } = useParams();
    const [castResults, setCastResults] = useState(null);
    const [Error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        const fetchMovieCast = async () => {
            setIsLoader(true);
            setError('');
            try {
                const data = await getMovieCredits(movieId);
                setCastResults(data.cast);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
            } finally {
                setIsLoader(false);
            }
        }
        fetchMovieCast()
    }, [Error, movieId]);

    return (
        <>
            {isLoader && <Loader />}
            {castResults && <CastList castArray={castResults} />}
        </>
    )
}

export default Cast;