import React from 'react';
import css from './ReviewsList.module.css'

const ReviewsList = ({ reviewsResults }) => {
    return (
        <ul className={css.list}>
            {reviewsResults.map(review => {
                return (
                    <li key={review.id} className={css.item}>
                        <h4 className={css.text}>Author: {review.author}</h4>
                        <p className={css.text}>"{review.content}"</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default ReviewsList