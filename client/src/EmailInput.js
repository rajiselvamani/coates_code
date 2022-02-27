import React from 'react';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';

export default function EmailInput(props) {
    const { label, emails, onChange } = props;

    return (
        <>
            <ReactMultiEmail
                placeholder={`${label} email adress`}
                emails={emails}
                onChange={onChange}
                validateEmail={(email) => {
                    return isEmail(email); // return boolean
                }}
                getLabel={(email, index, removeEmail) => {
                    return (
                        <div data-tag key={index}>
                            {email}
                            <span data-tag-handle onClick={() => removeEmail(index)}>
                                ×
                            </span>
                        </div>
                    );
                }}
            />
        </>
    );
}
