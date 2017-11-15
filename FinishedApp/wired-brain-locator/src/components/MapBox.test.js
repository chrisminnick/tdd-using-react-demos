import React from 'react';
import { shallow } from 'enzyme';
import MapBox from './MapBox';

it('renders without crashing', () => {
    const component = shallow(<MapBox />);
});
