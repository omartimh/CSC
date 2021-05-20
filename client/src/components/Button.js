const Button = ({text, icon, className, style, onClick}) => {
    return <button type="button" className={className} style={style} onClick={onClick} >{text} {icon}</button>
}

export default Button
