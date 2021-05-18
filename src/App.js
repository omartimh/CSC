// import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Blog from './components/Blog'
import Courses from './components/Courses'
import Jobs from './components/Jobs'

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="container">
          {/* Login */}
          <Route path="/login" component={Login}/>

          {/* Signup */}
          <Route path="/signup" component={Signup}/>

          {/* Home */}
          <Route path="/" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Home/>
              </div>
              <Footer/>
            </>
          )}/>

          {/* About */}
          <Route path="/about" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <About/>
              </div>
              <Footer/>
            </>
          )}/>

          {/* Contact */}
          <Route path="/contact" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Contact/>
              </div>
              <Footer/>
            </>
          )}/>

          {/* Help */}
          <Route path="/help" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Help/>
              </div>
              <Footer/>
            </>
          )}/>

          {/* Profile */}
          <Route path="/profile" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Profile/>
              </div>
              <Footer/>
            </>
          )}/>

          {/* Settings */}
          <Route path="/settings" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Settings/>
              </div>
              <Footer/>
            </>
          )}/>
          
          {/* Blog */}
          <Route path="/blog" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Blog/>
              </div>
              <Footer/>
            </>
          )}/>

          {/* Courses */}
          <Route path="/courses" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Courses/>
              </div>
              <Footer/>
            </>
          )}/>

          {/* Jobs */}
          <Route path="/jobs" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <Jobs/>
              </div>
              <Footer/>
            </>
          )}/>

        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
