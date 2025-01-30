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
        <div className={cardCustomStyle} onClick={handleCardClick}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <div>
                    <p>{name}</p>
                    <p>USD {price}</p>
                </div>
                <div className="simpleCardFooter">
                    {showDetails && (
                        <>
                            <div className="simpleCardRatingContainer">
                                <img src={star} alt="" />
                                <p>{averageRating}</p>
                            </div>
                            {reviews && <p>{reviews.length} Reviews</p>}
                            <FeatherIcon icon="more-vertical" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SimpleCard;