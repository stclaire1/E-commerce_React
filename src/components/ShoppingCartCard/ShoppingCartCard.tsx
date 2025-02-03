import FeatherIcon from 'feather-icons-react';
import React from 'react';
import './ShoppingCartCard.css';

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
            <div className="shoppingCartCardContainer">
                <div className="shoppingCartCardImg">
                    <img src={img} alt="" />
                </div>
                <div className="shoppingCartCardInfo">
                    <div>
                        <p>{name}</p>
                        <p className="shoppingCartCardPrice">{`USD ${price}`}</p>
                    </div>
                    <div>
                        <div className="quantityControls">
                            <div onClick={() => onQuantityChange(id, 'decrease')} className="quantityBtnContainer">
                                <FeatherIcon icon="minus" className="quantityBtn"/>
                            </div>
                            <span>{quantity}</span>
                            <div onClick={() => onQuantityChange(id, 'increase')} className="quantityBtnContainer">
                                <FeatherIcon icon="plus" className="quantityBtn"/>
                            </div>
                        </div>
                        <div onClick={() => onRemove(id)} className="removeItemBtn">
                            <FeatherIcon icon="trash-2" className="thrashIcon"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCartCard;