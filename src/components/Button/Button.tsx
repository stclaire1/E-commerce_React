import React from 'react';
import './Button.css';

interface ButtonProps {
    type: "button" | "submit";
    btnText: string;
}

function Button(props: ButtonProps) {
    return (
        <button type={props.type} className="button">
            {props.btnText}
        </button>
    );
}

export default Button;