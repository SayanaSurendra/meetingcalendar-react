import React from 'react';
import Label from './Label';

const InputField = ({ label, type, name, placeholder, options, rows }) => {
    let inputtype;

    switch (type) {
        case "textarea": inputtype = (<textarea className='form-control ' id={name} name={name} placeholder={placeholder} rows={rows} />);
            break;


        case "select":
            inputtype = (
                <select
                    className="form-select"
                    id={name}
                    name={name}
                >
                    <option value="">Choose level</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            );
            break;

            default:
                inputtype = (
                    <input
                        type={type}
                        className="form-control "
                        id={name}
                        name={name}
                        placeholder={placeholder}
                    />
                );
                break;
    }



    return (
        <div>
            <Label htmlFor={name} label={label} />
            {inputtype}
        </div>
    );
};

export default InputField;