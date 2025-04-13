import React from 'react';
import Label from './Label';


const InputField = ({ label, type, name, placeholder, rows,register, validation,errors}) => {
   
    

    const inputProps={
        id: name,
        name: name,
        className: `form-control ${errors[name] ? "is-invalid" : ""}`,
        placeholder: placeholder
       
    };

   


    return (
        <div>
            <Label htmlFor={name} label={label} />
            {type === "textarea" ? (
                <textarea {...inputProps} rows={rows} {...register(name,validation)} />
            ) : (
                <input type={type} {...inputProps} {...register(name,validation)} />
            )}
            {errors[name] && (
                <div className="invalid-feedback">{errors[name].message}</div>
            )}
        </div>
    );
};

export default InputField;