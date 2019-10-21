import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import InfoPage from './pages/info';
import {BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/info" exact component={InfoPage}></Route>
      </Router>
    </div>
  );
}

export default App;
