import './style.css';
import React from 'react';

const Button = ({type, text, icon, iconLeft, iconRight, className, style, onClick}) => {

    return <button type={type} className={className} style={style} onClick={onClick} >{iconLeft} {text} {icon} {iconRight}</button>
}

Button.defaultProps = {
    type: "button"
};

export default Button;