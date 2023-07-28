import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'API/api-service';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewsResults, setCastResults] = useState(null);
    const [Error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        const fetchMovieCast = async () => {
            setIsLoader(true);
            setError('');
            try {
                const data = await getMovieReviews(movieId);
                if (data.results.length > 0) setCastResults(data.results);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
            } finally {
                setIsLoader(false);
            }
        }
        fetchMovieCast()
    }, [Error, movieId])

    return (
        <>
            {isLoader && <Loader />}
            {reviewsResults ?
                <ReviewsList reviewsResults={reviewsResults} />
                : (<p>We dont have any reviews for this movie</p>)}
        </>)
}

export default Reviews;