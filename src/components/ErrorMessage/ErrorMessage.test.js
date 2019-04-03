import React from 'react';
import renderer from 'react-test-renderer';

import ErrorMessage from './ErrorMessage';

it('renders error message correctly', () => {
    const tree = renderer
        .create(<ErrorMessage message="This is a test error message." />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
