import './style.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgWorkAlt } from 'react-icons/cg';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';

import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Jobs = () => {

    const [toggleForm, setToggleForm] = useState(false);

    const addJob = () => {
        setToggleForm(!toggleForm);
    };

    const handleSubmit = () => {

    };

    return (
        <div className="jobs">
            {/* {!toggleForm ? (
                <Button text="Add Job" className="btn btn-primary toggle" onClick={addJob}/>
            ) : (
                <Button text="Job Offers" className="btn btn-danger toggle" onClick={addJob}/>
            )} */}

            {toggleForm ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="title" text="Job Title"/>
                        <Input id="title" name="title" type="text"/>
                    </div>

                    <div>
                        <Label htmlFor="company" text="Company"/>
                        <Input id="company" name="company" type="text"/>
                    </div>

                    <div>
                        <Label htmlFor="description" text="Description"/>
                        <textarea id="description" name="description"  cols="30" rows="10"></textarea>  
                    </div>

                    <div>
                        <Label htmlFor="salary" text="Salary"/>
                        <Input id="salary" name="salary" type="text"/>
                    </div>

                    <div>
                        <Label htmlFor="prerequisites" text="Pre Requisites"/>
                        <Input id="prerequisites" name="prerequisites" type="text"/>
                    </div>

                    <div>
                        <Button type="submit" text="Create" className="btn btn-success"/>
                    </div>
                </form>
            ) : (
                <>
                    <div className="jobsContainer">
                        <aside>
                            <form>
                                <div>
                                    <h3>Title1</h3>
                                    <input id="check1" type="checkbox" name="check1"/>
                                    <label htmlFor="check1">Item1</label><br/>
                                    <input id="check2" type="checkbox" name="check2"/>
                                    <label htmlFor="check2">Item1</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">Item1</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Title2</h3>
                                    <input id="check1" type="checkbox" name="check1"/>
                                    <label htmlFor="check1">Item1</label><br/>
                                    <input id="check2" type="checkbox" name="check2"/>
                                    <label htmlFor="check2">Item1</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">Item1</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Title3</h3>
                                    <input id="check1" type="checkbox" name="check1"/>
                                    <label htmlFor="check1">Item1</label><br/>
                                    <input id="check2" type="checkbox" name="check2"/>
                                    <label htmlFor="check2">Item1</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">Item1</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Title4</h3>
                                    <input id="check1" type="checkbox" name="check1"/>
                                    <label htmlFor="check1">Item1</label><br/>
                                    <input id="check2" type="checkbox" name="check2"/>
                                    <label htmlFor="check2">Item1</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">Item1</label><br/>
                                </div>
                                <hr/>
                                <div>
                                    <h3>Title5</h3>
                                    <input id="check1" type="checkbox" name="check1"/>
                                    <label htmlFor="check1">Item1</label><br/>
                                    <input id="check2" type="checkbox" name="check2"/>
                                    <label htmlFor="check2">Item1</label><br/>
                                    <input id="check3" type="checkbox" name="check3"/>
                                    <label htmlFor="check3">Item1</label><br/>
                                </div>
                            </form>
                        </aside>
                        <div className="offers">
                            <div className="bar">
                                <h4><CgWorkAlt style={{ position: "relative", top: "2px", marginRight: "5px" }}/>Job Offers</h4>
                                <Button text="Add Job" iconRight={<FaRegEdit className="icon"/>} className="btn toggle" onClick={addJob}/>
                            </div>
                            <div className="offersWrapper">
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
                                <div className="card">
                                    <div className="tag">
                                        <span className="duration">part-time</span>
                                        <span className="salary">$72/year</span>
                                    </div>
                                    <h3>Title</h3>
                                    <a href="/" className="company">Company</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque, consequatur iste eos officia totam!</p>
                                    <hr/>
                                    <Link to="" className="view">View Job<IoIosPaper className="icon"/></Link>
                                </div>
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
