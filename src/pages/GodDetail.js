import React from 'react';
import PropTypes from 'prop-types';

import { Section, Container } from 'bloomer';

import God from '../components/God/God';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import NotFound from './NotFound';
import GodPropType from '../utils/GodPropType';

function GodDetail(props) {
    const { name, godsMap, isLoading } = props;

    if (! isLoading && godsMap && ! godsMap.hasOwnProperty(name)) {
        return <NotFound />;
    }

    const god = godsMap ? godsMap[name] : undefined;

    return (
        <Section className="has-heaven-bg">
            <Container>
                {
                    isLoading ?
                        <LoadingIndicator /> :
                        <God
                            god={god}
                            showDetailed={true}
                            godsMap={godsMap}
                        />
                }
            </Container>
        </Section>
    );
}

GodDetail.propTypes = {
    name: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
    isLoading: PropTypes.bool.isRequired
};

export default GodDetail;
