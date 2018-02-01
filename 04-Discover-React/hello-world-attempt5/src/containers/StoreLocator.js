import React, { Component } from 'react';
import Map from '../components/Map';
import Button from '../components/Button';

class StoreLocator extends Component {
    render() {
        return (
            <div className="StoreLocator">
                <Button />
                <Button />
                <Map />
            </div>
        );
    }
}

export default StoreLocator;
