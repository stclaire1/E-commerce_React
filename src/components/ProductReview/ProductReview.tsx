import React from 'react';
import { Rating } from '@mui/material';
import profilePic from '../../../public/profile-pic.jpg'
import './ProductReview.css';

interface Review {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    postedAt: string;
}

interface ProductProps {
    reviews: Review[];
}

function ProductReview({ reviews }: ProductProps) {
    return (
        <div className="productReviewContainer">
            {reviews.map((review) => (
                <div key={review.userId}>
                    <span>
                        <img src={profilePic} alt="" />
                    </span>
                    <span>
                        <p className="reviewUsername">{review.userName}</p>
                        <Rating name="product-rating" value={review.rating} precision={0.5} readOnly className="reviewRating"/>
                        <p>{review.comment}</p>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ProductReview;