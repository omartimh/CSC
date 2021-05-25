import './style.css';
import React from 'react'
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <footer>
            <div>
                <p style={{textAlign: "right", color: "#FFF"}}>Copyright &copy; 2021 MSA University.</p>
                <br/><hr/><br/>
                <span>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/help">Help</Link>
                </span>
                <p style={{textAlign: "center", marginTop: "3em", marginBottom: "-2em"}}><a href="https://msa.edu.eg/msauniversity/"><img style={{width: "100px", height: "70px"}} src="images/msa.png" alt="msa"/></a></p>
            </div>
        </footer>
    )
}

export default Footer