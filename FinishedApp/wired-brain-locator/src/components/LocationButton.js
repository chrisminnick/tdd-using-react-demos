import React, { Component } from 'react';
import './LocationButton.css';

class LocationButton extends Component {
    render(){
        return(<button className="Location-button" onClick={this.props.changeMap}>{this.props.shop}</button>);
    }
}

export default LocationButton;