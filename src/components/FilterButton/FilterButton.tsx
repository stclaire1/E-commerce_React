import React from 'react';
import './FilterButton.css';

interface FilterButtonProps {
    btnText: string;
    onClick: () => void;
    isActive: boolean;
}

function FilterButton({ btnText, onClick, isActive }: FilterButtonProps) {
    const baseClass = "filterBtn";
    const activeClass = isActive ? "active" : "";

    return (
        <button onClick={onClick} className={`${baseClass} ${activeClass}`} >{btnText}</button>
    );
}

export default FilterButton;