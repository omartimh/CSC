import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import HomePage from './pages';
import AuthPage from './pages/auth';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import HelpPage from './pages/help';
import ProfilePage from './pages/profile';
import SettingsPage from './pages/settings';
import BlogPage from './pages/blog';
import CoursesPage from './pages/courses';
import CoursesExplorePage from './pages/coursesExplore';
import JobsPage from './pages/jobs';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/auth" component={AuthPage} exact/>
          <Route path="/about" component={AboutPage} exact/>
          <Route path="/contact" component={ContactPage} exact/>
          <Route path="/help" component={HelpPage} exact/>
          <Route path="/profile" component={ProfilePage} exact/>
          <Route path="/settings" component={SettingsPage} exact/>
          <Route path="/blog" component={BlogPage} exact/>
          <Route path="/courses" component={CoursesPage} exact/>
          <Route path="/courses/explore" component={CoursesExplorePage} exact/>
          <Route path="/jobs" component={JobsPage} exact/>
        </Switch>
      </ScrollToTop>
    </Router>
  )
};

export default App;