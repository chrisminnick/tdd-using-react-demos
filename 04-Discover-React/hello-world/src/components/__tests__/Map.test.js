import React from 'react';
import {shallow,mount} from 'enzyme';
import Map from '../Map';

describe("Map", function() {
    let mountedMap;
    beforeEach(()=>{
        mountedMap = shallow(<Map />);
    });

    it('renders without crashing', () => {
        shallow(<Map />);
    });

    it('renders an image', () => {
        const maps = mountedMap.find('img');
        expect(maps.length).toBe(1);
    })

});

