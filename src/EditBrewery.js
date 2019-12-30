import React, { Component } from 'react';
import axios from 'axios';

class EditBrewery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: " ",
            brewery_type: " ",
            street: " ",
            city: " ",
            state: " ",
            postal_code: " ",
            phone: " "
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBreweryType = this.onChangeBreweryType.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangePostalCode = this.onChangePostalCode.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/breweries/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    brewery_type: res.data.brewery_type,
                    street: res.data.street,
                    city: res.data.city,
                    state: res.data.state,
                    postal_code: res.data.postal_code,
                    phone: res.data.phone
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onChangeName(evt) {
        this.setState({
            name: evt.target.value
        })
    }

    onChangeBreweryType(evt) {
        this.setState({
            brewery_type: evt.target.value
        })
    }
    onChangeStreet(evt) {
        this.setState({
            street: evt.target.value
        })
    }
    onChangeCity(evt) {
        this.setState({
            city: evt.target.value
        })
    }
    onChangeState(evt) {
        this.setState({
            state: evt.target.value
        })
    }
    onChangePostalCode(evt) {
        this.setState({
            postal_code: evt.target.value
        })
    }
    onChangePhone(evt) {
        this.setState({
            phone: evt.target.value
        })
    }

    onSubmit(evt) {
        evt.preventDefault()
        const edit = {
            name: this.state.name,
            brewery_type: this.state.brewery_type,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            postal_code: this.state.postal_code,
            phone: this.state.phone
        }
        console.log(edit)
        axios.post('http://localhost:8080/breweries//update/' + this.props.match.params.id, edit)
            .then(res => console.log(res.data))
        this.history.push('/');

    }

    render() {
        return (
            <div>
                <h3 align="center">Update Brewery</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Brewery Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.brewery_type}
                            onChange={this.onChangeBreweryType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Street: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.street}
                            onChange={this.onChangeStreet}
                        />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                        />
                    </div>
                    <div className="form-group">
                        <label>State: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.state}
                            onChange={this.onChangeState}
                        />
                    </div>
                    <div className="form-group">
                        <label>Postal Code: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.postal_code}
                            onChange={this.onChangePostalCode}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                        />
                    </div>


                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Brewery" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}



export default EditBrewery