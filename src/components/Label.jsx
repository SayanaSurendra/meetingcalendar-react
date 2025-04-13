import React from 'react';

const Label = ({htmlFor,label}) => {
    return (
        <div>
        <label htmlFor={htmlFor} className="form-label">{label}</label> 
        </div>
    );
};

export default Label;