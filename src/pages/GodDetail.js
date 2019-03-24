import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'bloomer';

import God from '../components/God/God';
import GodPropType from '../utils/GodPropType';

function GodDetail(props) {
    const { name, godsMap } = props;

    const god = godsMap ? godsMap[name] : {};

    return (
        <Container>
            <God god={god} godsMap={godsMap} />
        </Container>
    );
}

GodDetail.propTypes = {
    name: PropTypes.string,
    gods: PropTypes.objectOf(GodPropType),
};

export default GodDetail;
