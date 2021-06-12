import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPaper } from 'react-icons/io';

const Card = ({ job }) => {
    return (
        <div className="card">
            <div className="tag">
                <span className="duration">{ job.type }</span>
                <span className="salary">${ job.salary }/year</span>
            </div>
            <h3>{ job.title }</h3>
            <a href="/" className="company">{ job.company }</a>
            <p>{ job.info }</p>
            <hr/>
            <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
        </div>
    )
};

export default Card;