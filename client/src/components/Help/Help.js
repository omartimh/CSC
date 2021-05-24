import './style.css';
import React from 'react'

const Help = () => {
    return (
    <div className="help">
            <h1 style={{textAlign: "center"}}>Help</h1>
            
            <div class="main-block">
            <form action="/"/>
        <div class="title">
          <i class="fas fa-pencil-alt"></i> 
          <h2>Ask here</h2>
        </div>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Full name"/>
          <input type="text" name="name" placeholder="Email"/>
          <input type="text" name="name" placeholder="Phone number"/>
          <input type="password" name="name" placeholder="Password"/>
          <select>
            <option value="type" selected>Problem type</option>
            <option value="course">Course</option>
            <option value="programming-lang">Proggraming language</option>
            <option value="jobs">Jobs</option>
       
          </select>
       </div>
        <div class="checkbox">
          <input type="checkbox" name="checkbox"/><span>I agree to the Privacy Poalicy <a href="">Privacy Poalicy </a></span>
       </div>
        <button type="submit" href="/">Submit</button>
     </div>
     
   </div>
    )
}

export default Help
