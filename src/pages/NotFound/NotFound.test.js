import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from './NotFound';

it('renders not found page correctly', () => {
    const tree = renderer
        .create(<NotFound />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
