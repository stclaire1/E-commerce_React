import React from 'react';
import star from '../../../public/star-filled.svg'
import FeatherIcon from 'feather-icons-react';
import './SimpleCard.css';
import { useNavigate } from 'react-router-dom';

interface Review {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    postedAt: string;
}

interface SimpleCardProps {
    id: string;
    img: string;
    name: string;
    price: number;
    showDetails: boolean;
    reviews?: Review[];
    isVertical: boolean;
}

function SimpleCard({ id, img, name, price, showDetails, reviews, isVertical }: SimpleCardProps) {
    const calculateAverageRating = (reviews: Review[]) => {
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return total / reviews.length;
    };

    const averageRating = reviews && calculateAverageRating(reviews).toFixed(1);

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/productDetail/${id}`);
    }

    const cardCustomStyle = isVertical ? "simpleCardContainerVertical" : "simpleCardContainerHorizontal";

    return (
        <div className={`simpleCardContainer ${cardCustomStyle}`} onClick={handleCardClick}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="simpleCardInfo">
                <div>
                    <p className="simpleCardName">{name}</p>
                    <p className="simpleCardPrice">USD {price}</p>
                </div>
                <div className="simpleCardFooter">
                    {showDetails && (
                        <>
                            <div className="ratingReviewContainer">
                                <div className="simpleCardRatingContainer">
                                    <img src={star} alt="" />
                                    <p>{averageRating}</p>
                                </div>
                                {reviews && <p className="simpleCardReviewContainer">{reviews.length} Reviews</p>}
                            </div>
                            <FeatherIcon icon="more-vertical" className="simpleCardOptions"/>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SimpleCard;