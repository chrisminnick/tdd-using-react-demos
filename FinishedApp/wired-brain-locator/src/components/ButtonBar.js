import React, { Component } from 'react';
import LocationButton from '../components/LocationButton.js';
import './ButtonBar.css';

class ButtonBar extends Component {



    render(){
        var shopArray = this.props.shops;
        const buttons = shopArray.map(function(shop,id){
            return (
                <LocationButton
                    shop = {shop}
                    key = {id}
                />);
        });
        return(<div>{buttons}</div>);
    }
}

export default ButtonBar;