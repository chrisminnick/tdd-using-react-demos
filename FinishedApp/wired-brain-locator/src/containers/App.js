import React, {Component} from 'react';
import MapBox from '../components/MapBox.js';
import ButtonBar from '../components/ButtonBar.js';

import logo from '../images/wired-brain-coffee-logo.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shops: ['location1', 'location2']
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Store Locator</h1>
                </header>
                <ButtonBar shops={this.state.shops} />
                <MapBox />

            </div>
        );
    }
}

export default App;
