import React from 'react';
import renderer from 'react-test-renderer';

import PrivacyPolicy from './PrivacyPolicy';

it('renders privacy policy page correctly', () => {
    const tree = renderer
        .create(<PrivacyPolicy />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
