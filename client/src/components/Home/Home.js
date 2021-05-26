import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { BsBoxArrowRight } from 'react-icons/bs';
import { FaCloud } from 'react-icons/fa'; 
import { FcFlashOn } from 'react-icons/fc';

const Home = () => {
    return (
        <div className="home">
            <img src="images/home.jpg" alt="home"/>
            <h1>Think Reactively</h1>
            <div className="card">
                <h4>Light & Interactive</h4>
                <br/>
                <p>Built using the MERN Stack that make use of REACT components which makes browsing fast and easy.</p>
            </div>
            <FaCloud style={{color:"#0D47A1", position: "absolute", right: "140px", top: "700px", fontSize: "400px"}}/>
            <FcFlashOn style={{position: "absolute", right: "160px", top: "925px", fontSize: "350px"}}/>
            <div className="jobs">
                <h2>Discover job vaccanies & recruiment opportunities.</h2>
                <br/>
                <Link to="/jobs">Apply Now <BsBoxArrowRight style={{position: "relative", top: "4px", marginLeft: "7px"}}/></Link>
            </div>
            <div className="community">
                <h2>A community platform for <span>Computer Scientits</span> <p>and</p> <span>Software Engineers</span> all over Egypt.</h2>
                <img src="images/home-comm.jpeg" alt="home-comm"/>
                <Link to="/blog">Our Community</Link>
            </div>
            <div className="homeCourses">
                <h3>Get a Look at Exclusive Courses, Tutorials, Vouchers and More...</h3>
            </div>
        </div>
    )
}

export default Home
