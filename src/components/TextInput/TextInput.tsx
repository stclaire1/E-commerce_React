import React from 'react';
import FeatherIcon from 'feather-icons-react';

interface TextInputProps {
    onFocus?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ onFocus, onChange }: TextInputProps) {
    return (
        <div>
            <FeatherIcon icon="search" />
            <input type="text" placeholder="Search headphone" onFocus={onFocus} onChange={onChange} />
        </div>
    );
}

export default TextInput;