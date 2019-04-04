import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './container/Home'
import List from './container/List'
import Login from './container/Login/login'
import NotFound from './container/NotFound'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' exact component={App}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
