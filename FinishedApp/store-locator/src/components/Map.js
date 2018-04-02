import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
    render() {
        let {imagename = 'none.png', location = 'All Locations'} = this.props;

        return (<div className="MapBox">
                    <img src={"images/"+ imagename} alt={location} />
                </div>);
    }
}

export default Map;