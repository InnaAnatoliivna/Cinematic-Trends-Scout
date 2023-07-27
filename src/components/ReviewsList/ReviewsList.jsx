import React from 'react'

const ReviewsList = ({ reviewsResults }) => {
    return (
        <ul>
            {reviewsResults.map(review => {
                return (
                    <li key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>"{review.content}"</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default ReviewsList