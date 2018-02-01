import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from "enzyme";
import StoreLocator from '../StoreLocator';

describe("StoreLocator", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StoreLocator />, div);
    });
    it('always renders a div', () => {
        //const div = document.createElement('div');
        const mountedStoreLocator = mount(<StoreLocator />);
        const divs = mountedStoreLocator.find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
    it('always renders a map', () => {
        //const div = document.createElement('div');
        const mountedStoreLocator = mount(<StoreLocator />);
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    });
    it('always renders two buttons', () => {
        //const div = document.createElement('div');
        const mountedStoreLocator = mount(<StoreLocator />);
        const buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(2);
    });
});

