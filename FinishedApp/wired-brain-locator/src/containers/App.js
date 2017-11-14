import React, {Component} from 'react';
import MapBox from '../components/MapBox.js';
import ButtonBar from '../components/ButtonBar.js';

import logo from '../images/wired-brain-coffee-logo.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shops: ['location1', 'location2'],
            currentMap: 'none.png'
        };
        this.loadMap = this.loadMap.bind(this);
    }
    loadMap(e){
        if (e.target.value === 'location1'){
            this.setState({currentMap: 'portland.png'});
        } else {
            this.setState({currentMap: 'astoria.png'});
        }
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
