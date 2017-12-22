import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import StoreLocator from '../StoreLocator';

describe("StoreLocator", function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StoreLocator />, div);
    });
    it('always renders a div', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<StoreLocator />);
        const result = renderer.getRenderOutput();
        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(
            result,
            "div"
        );
        expect(divs.length).toBeGreaterThan(0);
    });

});

