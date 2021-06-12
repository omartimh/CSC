import './style.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CgWorkAlt } from 'react-icons/cg';
import { FaRegEdit } from 'react-icons/fa';
import Card from './Card/Card';
import Button from '../Button/Button';
import { getJobs } from '../../actions/jobs';
import { createJob } from '../../actions/jobs';
import { CircularProgress } from '@material-ui/core';

const Jobs = () => {

    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs);
    const [jobData, setJobData] = useState({ title: '', company: '', info: '', type: '', salary: '' });
    const [toggleForm, setToggleForm] = useState(false);

    const addJob = () => {
        setToggleForm(!toggleForm);
    };

    const handleChange = (e) => {
        setJobData({...jobData, [e.target.name]: e.target.value }) 
    };

    const clearJob = () => {
        setJobData({ title: '', company: '', info: '', type: '', salary: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createJob(jobData));
        clearJob();
        addJob();
    };

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    return (
        <div className="jobs">
            {toggleForm ? (
                <div className="createJob">
                    <form onSubmit={handleSubmit}>
                        <h2>Create Job Offer</h2>
                        <Button text="Go Back" className="btn" onClick={addJob}/>
                        <div>
                            <label htmlFor="title">Title</label><br/>
                            <input id="title" type="text" name="title" value={jobData.title} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="company">Company</label><br/>
                            <input id="company" type="text" name="company" value={jobData.company} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="info">Info</label><br/>
                            <textarea id="info" name="info" value={jobData.info} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="type">Type</label><br/>
                            <select id="type" name="type"  value={jobData.type} onChange={handleChange}>
                                <option selected disabled>Choose</option>
                                <option value="Intership">Internship</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Part-Time">Part Time</option>
                                <option value="Full-Time">Full Time</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="salary">Salary</label><br/>
                            <input id="salary" type="number" name="salary" min="0"  value={jobData.salary} onChange={handleChange}/>
                        </div>
                        <Button type="submit" name="submit" text="Add Offer"/>
                    </form>
                </div>
            ) : (
                <>
                    <div className="jobsContainer">
                        <aside>
                            <form>
                                <div>
                                    <h3>Field</h3>
                                    <input id="anyField" type="checkbox" name="anyField"/>
                                    <label htmlFor="anyField">Any</label><br/>
                                    <input id="softwareDeveloper" type="checkbox" name="softwareDeveloper"/>
                                    <label htmlFor="softwareDeveloper">Software Developer</label><br/>
                                    <input id="databaseAdmin" type="checkbox" name="databaseAdmin"/>
                                    <label htmlFor="databaseAdmin">Database Administrator</label><br/>
                                    <input id="hardwareEnginner" type="checkbox" name="hardwareEnginner"/>
                                    <label htmlFor="hardwareEnginner">Hardware Engineer</label><br/>
                                    <input id="systemAnalyst" type="checkbox" name="systemAnalyst"/>
                                    <label htmlFor="systemAnalyst">System Analyst</label><br/>
                                    <input id="networkArchitect" type="checkbox" name="networkArchitect"/>
                                    <label htmlFor="networkArchitect">Network Architect</label><br/>
                                    <input id="webDeveloper" type="checkbox" name="webDeveloper"/>
                                    <label htmlFor="webDeveloper">Web Developer</label><br/>
                                    <input id="securityAnalyst" type="checkbox" name="securityAnalyst"/>
                                    <label htmlFor="securityAnalyst">Information Security Analyst</label><br/>
                                    <input id="researchScientist" type="checkbox" name="researchScientist"/>
                                    <label htmlFor="researchScientist">Information Research Scientist</label><br/>
                                    <input id="systemManager" type="checkbox" name="systemManager"/>
                                    <label htmlFor="systemManager">Information System Manager</label><br/>
                                    <input id="projectManager" type="checkbox" name="projectManager"/>
                                    <label htmlFor="projectManager">IT Project Manager</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Technologies & Frameworks</h3>
                                    <input id="anyTech" type="checkbox" name="anyTech"/>
                                    <label htmlFor="anyTech">Any</label><br/>
                                    <input id="javascript" type="checkbox" name="javascript"/>
                                    <label htmlFor="javascript">JavaScript</label><br/>
                                    <input id="java" type="checkbox" name="java"/>
                                    <label htmlFor="java">Java</label><br/>
                                    <input id="html" type="checkbox" name="html"/>
                                    <label htmlFor="html">HTML</label><br/>
                                    <input id="c" type="checkbox" name="c"/>
                                    <label htmlFor="c">C</label><br/>
                                    <input id="git" type="checkbox" name="git"/>
                                    <label htmlFor="git">Git</label><br/>
                                    <input id="c++" type="checkbox" name="c++"/>
                                    <label htmlFor="c++">C++</label><br/>
                                    <input id="python" type="checkbox" name="python"/>
                                    <label htmlFor="python">Python</label><br/>
                                    <input id="css" type="checkbox" name="css"/>
                                    <label htmlFor="css">CSS</label><br/>
                                    <input id="blockchain" type="checkbox" name="blockchain"/>
                                    <label htmlFor="blockchain">Blockchain</label><br/>
                                    <input id="sql" type="checkbox" name="sql"/>
                                    <label htmlFor="sql">SQL</label><br/>
                                    <input id="react" type="checkbox" name="react"/>
                                    <label htmlFor="react">React</label><br/>
                                    <input id="angular" type="checkbox" name="angular"/>
                                    <label htmlFor="angular">Angular</label><br/>
                                    <input id="ruby" type="checkbox" name="ruby"/>
                                    <label htmlFor="ruby">Ruby</label><br/>
                                    <input id="mvc" type="checkbox" name="mvc"/>
                                    <label htmlFor="mvc">MVC</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Experience Level</h3>
                                    <input id="anyExperience" type="checkbox" name="anyExperience"/>
                                    <label htmlFor="anyExperience">Any</label><br/>
                                    <input id="junior" type="checkbox" name="junior"/>
                                    <label htmlFor="junior">Junior | 0–2 years</label><br/>
                                    <input id="intermediate" type="checkbox" name="intermediate"/>
                                    <label htmlFor="intermediate">Intermediate | 2–5 years</label><br/>
                                    <input id="senior" type="checkbox" name="senior"/>
                                    <label htmlFor="senior">Senior | 5–8 + years</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Job Type</h3>
                                    <input id="anyType" type="checkbox" name="anyType"/>
                                    <label htmlFor="anyType">Any</label><br/>
                                    <input id="internship" type="checkbox" name="internship"/>
                                    <label htmlFor="internship">Internship</label><br/>
                                    <input id="hourly" type="checkbox" name="hourly"/>
                                    <label htmlFor="hourly">Hourly</label><br/>
                                    <input id="partTime" type="checkbox" name="partTime"/>
                                    <label htmlFor="partTime">Part-Time</label><br/>
                                    <input id="fullTime" type="checkbox" name="fullTime"/>
                                    <label htmlFor="fullTime">Full-Time</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Job Salary</h3>
                                    <input id="anySalary" type="checkbox" name="anySalary"/>
                                    <label htmlFor="anySalary">Any</label><br/>
                                    <input id="check1" type="checkbox" name="check1"/>
                                    <label htmlFor="check1">$0 - $5,000</label><br/>
                                    <input id="check2" type="checkbox" name="check2"/>
                                    <label htmlFor="check2">$5,000 - $15,000</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">$15,000 - $50,000</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">$50,000 - $100,000</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">$100,000 - $180,000 +</label><br/>
                                </div>
                            </form>
                        </aside>
                        <div className="offers">
                            <div className="bar">
                                <h4><CgWorkAlt style={{ position: "relative", top: "2px", marginRight: "5px" }}/>Job Offers</h4>
                                <Button text="Add Job" iconRight={<FaRegEdit className="icon"/>} className="btn toggle" onClick={addJob}/>
                            </div>
                            <div className="offersWrapper">
                                {!jobs.length ? (
                                    <div style={{ width: "100%", height: "45vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <CircularProgress style={{ color: "#f50057" }}/>
                                    </div>
                                ) : jobs.map((job) => (
                                    <Card key={job._id} job={job}/>
                                ))} 
                            </div>
                        </div>
                    </div>














                
                    {/* <div className="jobOffers" style={{ textAlign: "center" }}>
                        <h3>Offer</h3>
                        <h3>Offer</h3>
                        <h3>Offer</h3>
                    </div>

                    <table id="customers">
                        <tbody>
                            <tr ><th>Eployment Online Offers</th></tr>
                            <tr><td><a href="https://www.indeed.com/jobs?q=computer+science&l=">Indeed</a></td></tr>
                            <tr><td><a href="https://www.bayt.com/en/egypt/jobs/computer-science-jobs/">Bayt</a></td></tr>
                            <tr><td><a href="https://www.linkedin.com/jobs/search/?keywords=computer%20science" >linkedin</a></td></tr>
                            <tr><td><a href="https://stackoverflow.com/jobs">Stackoverflow</a></td></tr>
                            <tr><td><a href="https://wuzzuf.net/a/Computer-Science-Jobs-in-Egypt">Wuzzuf</a></td></tr>
                            <tr><td><a href="https://www.naukrigulf.com/computer-science-jobs-in-egypt">Naukrigulf</a></td></tr>
                        </tbody>
                    </table> */}
                </>
            )}
            
        </div>
    )
};

export default Jobs;
