import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Help from './components/Help/Help';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import CoursesExplore from './components/Courses/Explore/Explore';
import Jobs from './components/Jobs/Jobs';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div className="container">

          <Switch>
            <Route path="/auth" exact component={Auth}/>
            <Route path="/" exact render={(props) => (
              <>
                <Header/>
                <div className="content">
                  <Home/>
                </div>
                <Footer/>
              </>
            )}/>
          </Switch>

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

          {/* CoursesExplore */}
          <Route path="/courses/explore" exact render={(props) => (
            <>
              <Header/>
              <div className="content">
                <CoursesExplore/>
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
