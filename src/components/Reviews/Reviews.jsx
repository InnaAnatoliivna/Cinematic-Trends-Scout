import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'API/api-service';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewsResults, setCastResults] = useState(null);
    const [Error, setError] = useState('');

    useEffect(() => {
        const fetchMovieCast = async () => {
            setError('');
            try {
                const data = await getMovieReviews(movieId);
                if (data.results.length > 0) setCastResults(data.results);
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
            {reviewsResults ?
                <ReviewsList reviewsResults={reviewsResults} />
                : (<p>We dont have any reviews for this movie</p>)}
        </>)
}

export default Reviews;