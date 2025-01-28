import React from 'react';
import { Link } from 'react-router-dom';
import './SalesCard.css';

interface SalesCardProps {
    id: string;
    name: string;
    img: string;
}

function SalesCard({ id, name, img }: SalesCardProps) {
    return (
        <div className="carrousel-card">
            <div>
                <h3>{name}</h3>
                <Link to={`/productDetail/${id}`}>Shop now</Link>
            </div>
            <img src={img} alt="" />
        </div>
    );
}

export default SalesCard;