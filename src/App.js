import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BreweryList from './BreweryList';
import CreateBrewery from './CreateBrewery';
import EditBrewery from './EditBrewery'

const proxyurl = "https://cors-anywhere.herokuapp.com/"
const url = 'http://localhost:8080/'
class App extends Component {
  constructor () {
    super ()
    this.state = {
      beerData: []
    }
  }
  componentDidMount(){
    fetch (proxyurl + url)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({beerData: res})
      console.log(this.state.countryData)
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link to="/" className="navbar-brand text-white">DC Brewery Tracker</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link text-white">Breweries</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link text-white">Create Brewery</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={BreweryList} />
        <Route path="/edit/:id" component={EditBrewery} />
        <Route path="/create" component={CreateBrewery} />
      </div>
    );
  }
}


export default App;
