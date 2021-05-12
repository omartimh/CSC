import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/login" component={Login}/>
      <Route path="/" exact render={(props) => (
        <>
          <Header/>
          <div className="content">
            
          </div>
          <Footer/>
        </>
      )}/>
      </div>
    </Router>
  );
}

export default App;
