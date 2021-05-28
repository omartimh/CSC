import './style.css';
import React, { useState } from 'react';

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
            {!toggleForm ? (
                <Button text="Add Job" className="btn btn-primary toggle" onClick={addJob}/>
            ) : (
                <Button text="Job Offers" className="btn btn-danger toggle" onClick={addJob}/>
            )}

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
                    <div className="jobOffers" style={{ textAlign: "center" }}>
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
                    </table>
                </>
            )}
            
        </div>
    )
};

export default Jobs;
