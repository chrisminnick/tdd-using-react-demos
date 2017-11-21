import React, {Component} from 'react';
import MapBox from '../components/MapBox.js';
import ButtonBar from '../components/ButtonBar.js';
import {loadMap} from '../state-functions.js';

import logo from '../images/wired-brain-coffee-logo.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shops: [{
                        'location'  :'Portland',
                        'address'   :'123 Portland Dr.'
                    },
                    {
                        'location'  :'Astoria',
                        'address'   :'123 Astoria Dr.'
                    }],
            currentMap: 'none.png'
        };
        this.loadMap = loadMap.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Store Locator</h1>
                </header>
                <ButtonBar loadMap = {this.loadMap} shops={this.state.shops} />
                <MapBox shopMap = {this.state.currentMap} />


            </div>
        );
    }
}

export default App;
