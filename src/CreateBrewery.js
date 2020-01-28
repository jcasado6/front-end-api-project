import React, { Component } from 'react';
import Axios from 'axios';

class CreateBrewery extends Component {
    constructor(props) {
        super(props)

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
    console.log('submitted')
    console.log(`name: ${this.state.name}`)
    console.log(`brewery_type: ${this.state.brewery_type}`)
    console.log(`street: ${this.state.street}`)
    console.log(`city: ${this.state.city}`)
    console.log(`state: ${this.state.state}`)
    console.log(`postal_code: ${this.state.postal_code}`)
    console.log(`phone: ${this.state.phone}`)

    const newBrewery = {
        name: this.state.name,
        brewery_type: this.state.brewery_type,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        postal_code: this.state.postal_code,
        phone: this.state.phone
    };

    Axios.post('https://brewery-tracker-api.herokuapp.com/breweries/add', newBrewery).then(res => console.log(res.data))
    this.setState({
        name: " ",
        brewery_type: " ",
        street: " ",
        city: " ",
        state: " ",
        postal_code: " ",
        phone: " "
    })
    this.props.history.push('/breweries');
}

render() {
    return (
        <div style={{marginTop: 10}}>
        <h3>Add Brewery</h3>
        <form onSubmit={this.onSubmit}>
            
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
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
        

            <div className="form-group">
                <input type="submit" value="Add Brewery" className="btn btn-primary" />
            </div>
        </form>
    </div>
    )
}
}



export default CreateBrewery