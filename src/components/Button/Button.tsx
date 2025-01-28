import React from 'react';
import './Button.css';

interface ButtonProps {
    type: "button" | "submit";
    btnText: string;
}

function Button({ type, btnText }: ButtonProps) {
    return (
        <button type={type} className="button">
            {btnText}
        </button>
    );
}

export default Button;