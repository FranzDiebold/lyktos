import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Hero, HeroBody, Columns, Column, Title } from 'bloomer';

import God from '../components/God/God';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import { godsSortedFilter } from '../utils/godsSortedFilter';
import { capitalizeFirstCharacter } from '../utils/capitalizeFirstCharacter';
import GodPropType from '../utils/GodPropType';

function GodsList(props) {
    const { type, godsList, isLoading, filterText, godsMap } = props;

    const gods = godsSortedFilter(godsList, filterText)
        .map(god => <God
                        key={god.id}
                        god={god}
                        showDetailed={false}
                        godsMap={godsMap}
                    />);

    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>{capitalizeFirstCharacter(type)} Gods and Goddesses | 🔱 lyktos</title>
            </Helmet>

            <Hero className="has-heaven-bg">
                <HeroBody>
                    <Columns isCentered>
                        <Column isSize={{mobile: 12, tablet: 10, desktop: 8}}>
                            <Title>{capitalizeFirstCharacter(type)} Gods and Goddesses</Title>

                            {
                                isLoading ?
                                    <LoadingIndicator /> :
                                    gods
                            }
                        </Column>
                    </Columns>
                </HeroBody>
            </Hero>
        </div>
    );
}

GodsList.propTypes = {
    type: PropTypes.string.isRequired,
    godsList: PropTypes.arrayOf(GodPropType),
    isLoading: PropTypes.bool.isRequired,
    filterText: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
};

export default GodsList;
