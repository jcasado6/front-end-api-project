import React, { Component } from 'react';

class CreateBrewery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: " ",
            brewery_type : " ",
            street: " ",
            city: " ",
            state: " ",
            postal_code: " ",
            phone: " "
        }
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