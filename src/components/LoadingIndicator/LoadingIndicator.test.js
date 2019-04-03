import React from 'react';
import renderer from 'react-test-renderer';

import LoadingIndicator from './LoadingIndicator';

it('renders loading indicator correctly', () => {
    const tree = renderer
        .create(<LoadingIndicator />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
