import React from 'react';
import PropTypes from 'prop-types';

import GodPair from './../GodPair/GodPair';
import { godsCounterpartsSortedFilter } from '../../utils/godsSortedFilter';
import GodPropType from '../../utils/GodPropType';

function CompareGodsList(props) {
    const {godCounterparts, filterText, godsMap} = props;

    const compareGods = godsCounterpartsSortedFilter(godCounterparts, filterText)
        .map(godPair => <GodPair godPair={godPair} godsMap={godsMap} />);

    return (
        <div>
            {compareGods}
        </div>
    );
}

CompareGodsList.propTypes = {
    godCounterparts: PropTypes.arrayOf(PropTypes.objectOf(GodPropType)).isRequired,
    filterText: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

CompareGodsList.defaultProps = {
    godCounterparts: [],
    filterText: '',
    godsMap: {},
};

export default CompareGodsList;
