import React from 'react';
import Label from './Label';


const InputField = ({ label, type, name, placeholder, options, rows,register, validation,errors}) => {
   
    let inputtype;

    switch (type) {
        case "textarea": inputtype = (<textarea className={`form-control ${errors[name]? "is-invalid" : ""}`} id={name} name={name} placeholder={placeholder} rows={rows} {...register(name,validation)}/>);
                        
            break;


        case "select":
            inputtype = (
                <select
                className={`form-select ${errors[name] ? "is-invalid" : ""}`}
                    id={name}
                    name={name}
                    {...register(name,validation)}>
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
                        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        {...register(name,validation)}/>
                );
                break;
    }



    return (
        <div>
            <Label htmlFor={name} label={label} />
            {inputtype}
            {errors[name] && (
                <div className="invalid-feedback">{errors[name].message}</div>
            )}
        </div>
    );
};

export default InputField;