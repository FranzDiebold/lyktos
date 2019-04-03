import React from 'react';
import renderer from 'react-test-renderer';

import GodSymbols from './GodSymbols';

it('renders god symbols correctly', () => {
    const tree = renderer
        .create(<GodSymbols symbols={['Symbol 1', 'Symbol 2']} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
