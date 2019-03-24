import React from 'react';
import PropTypes from 'prop-types';

import GodTag from '../GodTag/GodTag';
import GodPropType from '../../utils/GodPropType';

function GodParents(props) {
    const {parents, type, godsMap} = props;

    const parentTags = parents.map(parent => <GodTag key={parent} name={parent} type={type} godsMap={godsMap} />);

    return (
        <div>
            <span className="has-text-grey is-italic">Parents</span>
            <div className="field is-grouped is-grouped-multiline">
                {parentTags}
            </div>
        </div>
    );
}

GodParents.propTypes = {
    parents: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default GodParents;
