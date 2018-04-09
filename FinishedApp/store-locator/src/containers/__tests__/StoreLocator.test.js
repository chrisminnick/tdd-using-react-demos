import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

describe('StoreLocator', function () {

    let mountedStoreLocator;
    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    //TODO: rewrite using this https://www.npmjs.com/package/jest-mock-axios

    jest.mock('axios', ()=> {
        const exampleShopData = [
            {"location":"test location","address":"test address"}
        ];

        return {
            get: jest.fn(() => Promise.resolve(exampleShopData)),
        }
    });


    it('is an instance', ()=>{
        const inst = mountedStoreLocator.instance();
        expect(inst).toBeTruthy;
    });

    const axios = require('axios');

    it('fetches articles on #componentDidMount', ()=>{
        mountedStoreLocator.instance().componentDidMount().then(()=> {
            //expect(axios.get).toHaveBeenCalled();
            //expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
            expect(mountedStoreLocator.state()).toHaveProperty('shops', [
                {"location": "test location", "address": "test address"}
            ]);
            done();
        });
    });



    it('renders without crashing', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders a header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    it('renders a map', () => {
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    });



});


describe('chooseMap', ()=> {
        it('updates this.state.currentMap using the location passed to it', ()=>{
            let mountedStoreLocator = shallow(<StoreLocator />);
            let mockEvent = {target:{value:'testland'}};
            mountedStoreLocator.instance().chooseMap(mockEvent);
            expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
        })
    }
);

