import React from 'react';
import PropTypes from 'prop-types';

import GodPropType from '../../utils/GodPropType';
import GodTag from '../GodTag/GodTag';

function GodCounterpart(props) {
    const { counterpart, godsMap } = props;

    const counterpartTag = counterpart ? (<GodTag name={counterpart} godsMap={godsMap} />) : (<span>?</span>);

    return (
        <div>
            {counterpartTag}
        </div>
    );
}

GodCounterpart.propTypes = {
    counterpart: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default GodCounterpart;
