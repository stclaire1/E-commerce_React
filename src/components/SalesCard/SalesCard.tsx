import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SalesCard.css';
import FeatherIcon from 'feather-icons-react';

interface SalesCardProps {
    id: string;
    name: string;
    img: string;
}

function SalesCard({ id, name, img }: SalesCardProps) {
    const navigate = useNavigate();

    return (
        <div className="carrouselCardSalesCard">
            <div>
                <h3>{name}</h3>
                <div className="shopNowButton" onClick={() => navigate(`/productDetail/${id}`)}>
                    <Link to={`/productDetail/${id}`}>Shop now</Link>
                    <FeatherIcon icon="arrow-right" className="shopNowIcon" />
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    );
}

export default SalesCard;