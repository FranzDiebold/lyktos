import React from 'react';
import renderer from 'react-test-renderer';

import SiteNotice from './SiteNotice';

it('renders site notice correctly', () => {
    const tree = renderer
        .create(<SiteNotice />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
