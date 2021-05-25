import './style.css';
import React from 'react';

const Button = ({id, type, text, icon, iconLeft, iconRight, className, style, onClick}) => {

    return <button id={id} type={type} className={className} style={style} onClick={onClick} >{iconLeft} {text} {icon} {iconRight}</button>
}

Button.defaultProps = {
    type: "button"
};

export default Button;