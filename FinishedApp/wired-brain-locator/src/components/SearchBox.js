import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (<input type="text" id="Search-box" value="Enter Your Zip Code"/>);
    }
}

export default SearchBox;