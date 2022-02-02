import React from 'react';
import './Input.css';

export interface Props {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

function Input({ onChange }: Props) {
    return (
        <div
            className="input">
            <textarea
                onChange={onChange}
            />
        </div>
    )
}

export default Input;