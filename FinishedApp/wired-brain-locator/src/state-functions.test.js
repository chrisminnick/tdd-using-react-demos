import React from 'react';
import { shallow } from 'enzyme';
import {loadMap} from 'state-functions';

test('loadMap changes the image state prop', () => {
    const e = {target:{value:"newImage.jpg"}};
    const component = shallow(<App />);

    const startState = {
        currentMap: 'none.jpg'
    };
    component.loadMap(e);

    const finState = state.currentMap;


    expect(finState).toEqual('newImage.jpg');
});