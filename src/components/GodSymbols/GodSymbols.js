import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from 'bloomer';

function GodSymbols(props) {
    const { symbols } = props;

    const symbolTags = symbols.map(symbol => <Tag key={symbol}>{symbol}</Tag>);

    return (
        <div>
            <span className="has-text-grey is-italic">Symbols</span>
            <div className="tags are-medium">
                {symbolTags}
            </div>
        </div>
    );
}

GodSymbols.propTypes = {
    symbols: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GodSymbols;
