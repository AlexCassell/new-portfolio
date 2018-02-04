import React from 'react';
// import './css/App.css';
import Navigation from './components/Navigation';
import { About, Projects, Contact } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="global">
    <Navigation />
    <Route exact path="/" component={ About }/>
    <Route exact path="/projects" component={ Projects }/>
    <Route path="/contact" component={ Contact }/>
  </div>
);
export default App;