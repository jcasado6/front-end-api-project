import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import App from './App.js'




class BreweryList extends Component {
    constructor() {
        super()
        this.state = {
            beerData: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8080/breweries/')
            .then(res => {
                console.log(res)
            })
            .then(res => {
                this.setState({ beerData: res.data });
            })
            .catch((error) => {
                console.log(error);
            }).then(beerData => { console.log(beerData) })
    }




    render() {
        let brewery = this.state.beerData.map(beer => {
            return <App key={beer} />;
        })

        return (
            <div>
                <h3>Brewery List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Postal Code</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brewery}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default BreweryList