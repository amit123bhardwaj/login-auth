import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import InfoPage from './pages/info';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {userReducer as rootReducer } from './reducer/userReducer';
function App() {
const store = createStore(rootReducer)
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/info" exact component={InfoPage}></Route>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
