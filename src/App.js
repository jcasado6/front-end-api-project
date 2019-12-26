import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BreweryList from './BreweryList';
import CreateBrewery from './CreateBrewery';
import EditBrewery from './EditBrewery'


class App extends Component {
  render () {
  return (
    <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <Link to="/" className="navbar-brand">DC Brewery Tracker</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Breweries</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Brewery</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={BreweryList} />
          <Route path="/edit/:id" component={EditBrewery} />
          <Route path="/create" component={CreateBrewery} />
    </div>
  );
}
}

export default App;
