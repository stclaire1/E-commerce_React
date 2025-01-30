import React from 'react';
import './Button.css';

interface ButtonProps {
    type: "button" | "submit";
    btnText: string;
    onClick?: () => void;
}

function Button({ type, btnText, onClick }: ButtonProps) {
    return (
        <button type={type} className="button" onClick={onClick}>
            {btnText}
        </button>
    );
}

export default Button;