import FeatherIcon from 'feather-icons-react';
import './CommomPageHeader.css';
import React from 'react';

function CommomPageHeader() {
    return (
        <div className="commomPageHeaderContainer">
            <FeatherIcon icon="chevron-left" />
            <FeatherIcon icon="shopping-cart" />
        </div>
    )
}

export default CommomPageHeader;