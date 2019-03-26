import React from 'react';
import PropTypes from 'prop-types';

import { Columns, Column } from 'bloomer';

import God from './../God/God';
import GodPropType from '../../utils/GodPropType';

function GodPair(props) {
    const { godPair, godsMap } = props;

    return (
        <Columns>
            <Column>
                <God god={godPair.greek} godsMap={godsMap} />
            </Column>
            <Column>
                <God god={godPair.roman} godsMap={godsMap} />
            </Column>
        </Columns>
    );
}

GodPair.propTypes = {
    godPair: PropTypes.objectOf(GodPropType).isRequired,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default GodPair;
