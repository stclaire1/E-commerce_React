import React from 'react';
import FeatherIcon from 'feather-icons-react';

interface TextInputProps {
    onFocus?: () => void;
}

function TextInput({ onFocus }: TextInputProps) {
    return (
        <div>
            <FeatherIcon icon="search" />
            <input type="text" placeholder="Search headphone" onFocus={onFocus}/>
        </div>
    );
}

export default TextInput;