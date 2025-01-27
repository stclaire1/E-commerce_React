import React from 'react';
import FeatherIcon from 'feather-icons-react';

function TextInput(props: { placeholder: string }) {
    return (
        <div>
            <FeatherIcon icon="search" />
            <input type="text" placeholder="Search headphone" />
        </div>
    );
}

export default TextInput;