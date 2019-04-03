import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';

function Layout(props) {
    const { godsData, isLoading, error } = props;
    const [filterText, setFilterText] = useState('');

    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>🔱 lyktos</title>
            </Helmet>
            <Header setFilterText={setFilterText} />
            <Content
                godsData={godsData}
                isLoading={isLoading}
                error={error}
                filterText={filterText}
            />
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    godsData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default Layout;
