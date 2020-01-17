import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import URL from './db/URL'


const Beer = props => (
    <tr>
        <td>{props.beer.name}</td>
        <td>{props.beer.brewery_type}</td>
        <td>{props.beer.street}</td>
        <td>{props.beer.city}</td>
        <td>{props.beer.state}</td>
        <td>{props.beer.postal_code}</td>
        <td>{props.beer.phone}</td>
        <td>
            <Link to={ "/edit/" + props.beer._id}>Edit</Link>
        </td>
    </tr>
)


class BreweryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beerData: []
        }
    }


    componentDidMount() {
        axios.get(URL)
            .then(res => {
                
                this.setState({ beerData: res.data });
                console.log(this.state)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    beerList() {
        return this.state.beerData.map(function(beer, i){
            return <Beer beer={beer} key={i}/>
        })
    }

    render() {
    

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
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.beerList()}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default BreweryList