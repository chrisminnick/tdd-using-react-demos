import React, { Component } from 'react';
import './AddressBox.css';

class AddressBox extends Component {
    render() {
        return (
            <div className="AddressBox">

                <p>{this.props.locationAddress.address}</p>

            </div>
        );
    }
}

export default AddressBox;
