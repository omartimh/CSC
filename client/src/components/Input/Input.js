import './style.css';
import React from 'react';

const Input = ({ id, type, name, placeholder, className, style, autoComplete, autoFocus, required }) => {
    return <input id={id} type={type} name={name} placeholder={placeholder} className={className} style={style} autoComplete={autoComplete} autoFocus={autoFocus} required={required}/>
}

Input.defaultProps = {
    placeholder: "Input"
}

export default Input
