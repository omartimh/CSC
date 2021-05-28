import './style.css';
import React from 'react';

const Button = ({ id, type, text, icon, iconLeft, iconRight, className, style, onClick, disabled, hidden }) => {

    return <button id={id} type={type} className={className} style={style} onClick={onClick} disabled={disabled} hidden={hidden}>{iconLeft} {text} {icon} {iconRight}</button>
}

Button.defaultProps = {
    type: "button"
};

export default Button;