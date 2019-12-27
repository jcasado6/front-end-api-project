import React, { Component } from 'react';

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

    this.setState({
        name: " ",
        brewery_type: " ",
        street: " ",
        city: " ",
        state: " ",
        postal_code: " ",
        phone: " "
    })
}

render() {
    return (
        <div>
            <p>Create</p>
        </div>
    )
}
}



export default CreateBrewery