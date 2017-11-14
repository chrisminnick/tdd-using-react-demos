import React, { Component } from 'react';
import './MapBox.css';

class MapBox extends Component {
    render() {
        return (
            <div className="MapBox">

                <p><img src={"../images/" + this.props.shopMap} alt="the map"/></p>

            </div>
        );
    }
}

export default MapBox;
