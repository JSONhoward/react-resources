import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import Channels from './pages/Channels';
import Channel from './pages/Channel';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/channels' component={Channels} />
      <Route path='/channel/:id' component={Channel} />
      <Route path='/courses' component={Courses} />
      <Route path='/blogs' component={Blogs} />
      <Footer />
    </Router>
  );
}

export default App;
