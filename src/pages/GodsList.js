import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Section, Hero, HeroBody, Container, Columns, Column, Title } from 'bloomer';

import God from '../components/God/God';
import { godsSortedFilter } from '../utils/godsSortedFilter';
import { capitalizeFirstCharacter } from '../utils/capitalizeFirstCharacter';
import GodPropType from '../utils/GodPropType';

function GodsList(props) {
    const {type, godsList, filterText, godsMap} = props;

    const gods = godsSortedFilter(godsList, filterText)
        .map(god => <God key={god.id} god={god} godsMap={godsMap} />);

    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>{capitalizeFirstCharacter(type)} Gods and Goddesses | 🔱 lyktos</title>
            </Helmet>

            <Section className="has-heaven-bg">
                <Hero>
                    <HeroBody>
                        <Container>
                            <Columns isCentered>
                                <Column isSize={{mobile: 12, tablet: 10, desktop: 8}}>
                                    <Title>{capitalizeFirstCharacter(type)} Gods and Goddesses</Title>

                                    {gods}
                                </Column>
                            </Columns>
                        </Container>
                    </HeroBody>
                </Hero>
            </Section>
        </div>
    );
}

GodsList.propTypes = {
    type: PropTypes.string,
    godsList: PropTypes.arrayOf(GodPropType).isRequired,
    filterText: PropTypes.string,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

GodsList.defaultProps = {
    type: '',
    godsList: [],
    filterText: '',
    godsMap: {},
};

export default GodsList;
