import React from 'react';
import './ProductSpecification.css';

interface ProductSpecificationProps {
    details: string;
    description: string;
}

function ProductSpecification({ details, description }: ProductSpecificationProps) {
    return (
        <div className="productSpecificationContainer">
            <p>{details}</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductSpecification;