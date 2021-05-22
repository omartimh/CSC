import './style.css';
import React from 'react';

const Input = ({ id, type, value, name, placeholder, className, style, autoComplete, autoFocus, required, onChange}) => {
    return <input id={id} type={type} value={value} name={name} placeholder={placeholder} className={className} style={style} autoComplete={autoComplete} autoFocus={autoFocus} required={required} onChange={onChange}/>
}

Input.defaultProps = {
    placeholder: "Input"
}

export default Input
