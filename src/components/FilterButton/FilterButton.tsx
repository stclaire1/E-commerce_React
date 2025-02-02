import React from 'react';
import './FilterButton.css';

interface FilterButtonProps {
    btnText: string;
    onClick: () => void;
    isActive: boolean;
    isSortBy?: boolean;
}

function FilterButton({ btnText, onClick, isActive, isSortBy }: FilterButtonProps) {
    const baseClass = "filterBtn";
    const activeClass = isActive ? "active" : "";
    const isSortByClass = isSortBy ? "sortByBtn" : "";

    return (
        <button onClick={onClick} className={`${baseClass} ${activeClass} ${isSortByClass}`} >{btnText}</button>
    );
}

export default FilterButton;