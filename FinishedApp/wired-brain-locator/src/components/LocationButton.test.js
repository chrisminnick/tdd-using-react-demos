import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LocationButton from './LocationButton';

const shops=["location1","location2"];
const changeMap = jest.fn();

describe('LocationButton', () => {

    it('renders without crashing', () => {
        const component = shallow(<LocationButton shop="Location1" changeMap = {changeMap} />);
        expect(component).toBeDefined();
    });

    it('matches the snapshot', () => {
        const component = shallow(<LocationButton shop="Location1" changeMap = {changeMap} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('calls the function on click', () => {
        const component = shallow(<LocationButton shop="Location1" changeMap = {changeMap} />);
        component.find('button').simulate('click');
        expect(changeMap.mock.calls.length).toBe(1);
    });
});