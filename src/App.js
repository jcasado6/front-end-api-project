import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BreweryList from './BreweryList';
import CreateBrewery from './CreateBrewery';
import EditBrewery from './EditBrewery';
import Home from './Home';
import './App.css';




class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      beerData: []
    }
  }


  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link to="/" className="navbar-brand text-white">DC Brewery Tracker</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/breweries" className="nav-link text-white">Breweries</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link text-white">Create Brewery</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route exact
          path="/"
          component={Home}/>
        <Route exact path="/breweries" render={routerProps => <BreweryList {...routerProps} />} />
        <Route path="/edit/:id" render={routerProps => <EditBrewery {...routerProps} />} />
        <Route path="/create" render={routerProps => <CreateBrewery {...routerProps} />} />
      </div>
    );
  }
}


export default App;
