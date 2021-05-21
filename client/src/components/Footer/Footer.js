import './style.css';
import React from 'react'
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <footer>
            <p style={{textAlign: "right"}}>Copyright &copy; 2021 MSA University.</p>
            <br/><hr/><br/>
            <span>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/help">Help</Link>
            </span>
        </footer>
    )
}

export default Footer