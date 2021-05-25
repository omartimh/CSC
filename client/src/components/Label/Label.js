import './style.css';
import React from 'react';

const Label = ({ htmlFor, icon, text, className, style }) => {
    return <label htmlFor={htmlFor} className={className} style={style}>{icon}{text}</label>
}

Label.defaultProps = {
    
};

export default Label
