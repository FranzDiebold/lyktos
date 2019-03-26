import React from 'react';
import PropTypes from 'prop-types';

import GodPair from '../GodPair/GodPair';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { godsCounterpartsSortedFilter } from '../../utils/godsSortedFilter';
import GodPropType from '../../utils/GodPropType';

function CompareGodsList(props) {
    const { godCounterparts, isLoading, filterText, godsMap } = props;

    const compareGods = godsCounterpartsSortedFilter(godCounterparts, filterText)
        .map(godPair => <GodPair key={`${godPair.greek.id}-${godPair.roman.id}`} godPair={godPair} godsMap={godsMap} />);

    return (
        <div>
            {
                isLoading ?
                    <LoadingIndicator /> :
                    compareGods
            }
        </div>
    );
}

CompareGodsList.propTypes = {
    godCounterparts: PropTypes.arrayOf(PropTypes.objectOf(GodPropType)),
    isLoading: PropTypes.bool.isRequired,
    filterText: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
};

export default CompareGodsList;
