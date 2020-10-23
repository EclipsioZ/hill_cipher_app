import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './jsx/Sidebar';
import Titlebar from './jsx/Titlebar';
import Home from './jsx/Home';
import Reverse from './jsx/Reverse';
import Encrypt from './jsx/Encrypt';
import Decrypt from './jsx/Decrypt';
import About from './jsx/About';

function App() {
  return (
    <div className="App">
      <Titlebar></Titlebar>
      <Router>
      <Sidebar />
        <div className="page">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reverse' exact component={Reverse} />
          <Route path='/encrypt' exact component={Encrypt} />
          <Route path='/decrypt' exact component={Decrypt} />
          <Route path='/about' exact component={About} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
