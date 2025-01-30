import FeatherIcon from 'feather-icons-react';
import React from 'react';

interface SimpleCardProps {
    id: string;
    img: string;
    name: string;
    price: number | string;
    quantity: number;
    onRemove: (id: string) => void;
    onQuantityChange: (id: string, type: 'increase' | 'decrease') => void;
}

function ShoppingCartCard({ id, img, name, price, quantity, onRemove, onQuantityChange }: SimpleCardProps) {
    return (
        <>
            <div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{`USD ${price}`}</p>
                </div>
                <div>
                <div className="quantity-controls">
                    <div onClick={() => onQuantityChange(id, 'decrease')}>
                        <FeatherIcon icon="minus" />
                    </div>
                    <span>{quantity}</span>
                    <div onClick={() => onQuantityChange(id, 'increase')}>
                        <FeatherIcon icon="plus" />
                    </div>
                </div>
                <div onClick={() => onRemove(id)}>
                    <FeatherIcon icon="trash-2" />
                </div>
            </div>
            </div>
        </>
    );
}

export default ShoppingCartCard;