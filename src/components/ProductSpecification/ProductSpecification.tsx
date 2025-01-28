import React from 'react';

interface ProductSpecificationProps {
    details: string;
    description: string;
}

function ProductSpecification({ details, description }: ProductSpecificationProps) {
    return (
        <div>
            <p>{details}</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductSpecification;