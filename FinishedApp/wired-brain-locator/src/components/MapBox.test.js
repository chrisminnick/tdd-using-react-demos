import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MapBox from './MapBox';

it('renders without crashing', () => {
    const component = shallow(<MapBox />);
    expect(component).toExist();
});
