import './style.css';
import React from 'react'

const Contact = () => {
  return (
    <div>
      <br/><div><h1 style={{textAlign: "center", fontWeight: "600"}}>Development Team</h1></div><br/>
        <div class="row">
          
          <div class="column">
            <div class="card">
                <img src="images\jelly.jpg" alt="Omar" style={{width:"100%"}}/>
                <div class="container1">
                <h2>Omar Tarek</h2>
                <p class="title1">Team leader</p>
                <p>He's the main developer and supervisor of this web project </p>
                <a href="mailto: omar.tarek22@msa.edu.eg">omar.tarek22@msa.edu.eg</a>
                <p><button class="btn button">Contact</button></p>
              </div>
            </div>
          </div>
                  
                
          <div class="column">
            <div class="card">
              <img src="images/abdallah.jpg" alt="Abdallah" style={{width:"100%"}}/>
              <div class="container1">
                <h2>Abdallah Ayman</h2>
                <p class="title1">Full stack Developer</p>
                <p>mern developer and deputy of the team leader.</p>
                <a href="mailto: aballah.ayman1@msa.edu.eg">aballah.ayman1@msa.edu.eg</a>
                <p><button class="btn button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="images/seif.jpg" alt="Seif" style={{width:"100%"}}/>
              <div class="container1">
                <h2>Seif Ahmed</h2>
                <p class="title1">FrontEnd Developer</p>
                <p>mern developer extremely good at using react.</p>
                <a href="mailto: seif.ahmed1@msa.edu.eg">seif.ahmed1@msa.edu.eg</a>
                <p><button class="btn button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="images/salma.jpg" alt="Salma" style={{width:"100%"}}/>
              <div class="container1">
                <h2>Salma Tamer</h2>
                <p class="title1">Database Adminstrator</p>
                <p>mern developer extremely good at using mongodb.</p>
                <a href="mailto: salma.tamer@msa.edu.eg">salma.tamer@msa.edu.eg</a>
                <p><button class="btn button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="images/omar.jpg" alt="Seif" style={{width:"100%"}}/>
              <div class="container1">
                <h2>Seif Ahmed</h2>
                <p class="title1">Developer</p>
                <p>FrontEnd developer and the system analyst of the project.</p>
                <a href="mailto: omar.magdy10@msa.edu.eg">omar.magdy10@msa.edu.eg</a>
                <p><button class="btn button">Contact</button></p>
              </div>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Contact
