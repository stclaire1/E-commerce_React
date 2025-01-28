import React from 'react';

interface SimpleCardProps {
    img: string;
    name: string;
    price: number;
    showDetails: boolean;
}

function SimpleCard({ img, name, price, showDetails }: SimpleCardProps) {
    return (
        <div>   
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            {showDetails && (
                <div>

                </div>
            )}
        </div>
    );
}

export default SimpleCard;