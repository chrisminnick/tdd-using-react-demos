import React from 'react';
import {shallow,mount} from 'enzyme';
import Button from '../Button';

describe("Button", function() {

    let mountedButton;

    beforeEach(()=>{
        mountedButton = shallow(<Button />);
    });

    it('renders without crashing', () => {
        shallow(<Button />);
    });

    it('renders a button', () => {
        const button = mountedButton.find('button');
        expect(button.length).toBe(1);
    })


});
