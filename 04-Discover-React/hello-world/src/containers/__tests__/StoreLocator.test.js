import React from 'react';
import {shallow,mount} from 'enzyme';
import StoreLocator from '../StoreLocator.js';
import Header from '../../components/Header';
import Button from '../../components/Button';

describe("StoreLocator", function() {
    let mountedStoreLocator;

    beforeEach(()=>{
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders without crashing', () => {
        shallow(<StoreLocator />);
    });

    it('renders a header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    it('renders two buttons', () => {
        const buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(2);
    });

    it('renders a map', () => {
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    });

});