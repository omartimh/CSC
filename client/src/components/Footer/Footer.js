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
            <p style={{textAlign: "center", marginTop: "5em"}}><a href="https://msa.edu.eg/msauniversity/"><img style={{width: "100px", height: "70px"}} src="images/msa.png" alt="msa"/></a></p>
        </footer>
    )
}

export default Footer