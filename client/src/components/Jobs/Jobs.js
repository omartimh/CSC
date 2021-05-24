import './style.css';
import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button';
import {ImSearch} from 'react-icons/im'
const Jobs = () => {
    return (
        <div className="jobs">
            <h1 style={{textAlign: "center"}}>Jobs</h1>
           <Input className="search-jobs" placeholder="Search for jobs" name="search" />
           <Button className="btn-search" icon={<ImSearch/>}/>
        </div>
    )
}

export default Jobs
