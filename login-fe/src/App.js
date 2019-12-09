import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/user-profile' component={UserProfile} />
    </Router>
  );
}

export default App;
