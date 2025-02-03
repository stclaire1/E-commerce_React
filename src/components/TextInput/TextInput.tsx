import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './TextInput.css';

interface TextInputProps {
    onFocus?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ onFocus, onChange }: TextInputProps) {
    return (
        <div className="textInputContainer">
            <FeatherIcon icon="search" className="searchIconCustom"/>
            <input type="text" placeholder="Search headphone" onFocus={onFocus} onChange={onChange} />
        </div>
    );
}

export default TextInput;