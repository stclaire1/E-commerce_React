import FeatherIcon from 'feather-icons-react';
import './CommomPageHeader.css';
import React from 'react';

interface CommomPageHeaderProps {
    pageTitle?: string;
}

function CommomPageHeader({ pageTitle }: CommomPageHeaderProps) {
    return (
        <div className="commomPageHeaderContainer">
            <FeatherIcon icon="chevron-left" />
            {pageTitle && <p>{pageTitle}</p>}
            <FeatherIcon icon="shopping-cart" />
        </div>
    )
}

export default CommomPageHeader;