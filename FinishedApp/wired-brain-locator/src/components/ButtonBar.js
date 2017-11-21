import React, { Component } from 'react';
import LocationButton from '../components/LocationButton.js';
import './ButtonBar.css';

class ButtonBar extends Component {



    render(){
        const shopArray = this.props.shops;
        const buttons = shopArray.map((shop,id) => {
            return (
                <LocationButton
                    shop = {shop.location}
                    key = {id}
                    changeMap = {this.props.loadMap}
                />);
        });
        return(<div>{buttons}</div>);
    }
}

export default ButtonBar;