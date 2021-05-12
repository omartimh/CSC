const Button = ({text, icon, className, onClick}) => {

    return <button className={className} type="button" onClick={onClick}>{text} {icon}</button>
}

export default Button
