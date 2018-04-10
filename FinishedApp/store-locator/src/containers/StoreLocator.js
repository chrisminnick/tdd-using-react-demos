import React, {Component} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import axios from 'axios';

class StoreLocator extends Component {
    constructor(props) {
        super(props);

        this.shops = [{
            'location'  : 'Portland',
            'address'   : '123 Portland Dr.'
        },{
            'location'  : 'Astoria',
            'address'   : '123 Astoria Dr.'
        },
            {
                'location'  : '',
                'address'   : ''
            }];

        this.state = {
            currentMap: 'none.png',
            shops: []
        };

        this.chooseMap = this.chooseMap.bind(this);

    }
    componentDidMount(){

        return axios.get('http://localhost:3000/data/shops.json').then(response => {
            this.setState({
                shops:response.data.shops
            })
        })
    }

    chooseMap(e){
        this.setState({currentMap: mapChooser(e.target.value)});
    }
    render() {

        let storeButtons = this.state.shops.map((shop,id)=>{
            return (<Button key={id} handleClick={this.chooseMap} location={shop.location}/>);
        });
        return (<div>
                <Header />
                <div>
                    {storeButtons}
                </div>
                <Map imagename={this.state.currentMap} location={this.props.location}/>
            </div>
        );
    }
}

export default StoreLocator;