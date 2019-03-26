import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Section, Hero, HeroBody, Container, Columns, Column, Title } from 'bloomer';

import CompareGodsList from '../components/CompareGodsList/CompareGodsList';
import GodPropType from '../utils/GodPropType';

function Compare(props) {
    const { godCounterparts, isLoading, godsMap, filterText } = props;

    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>Compare Greek and Roman Gods and Goddesses | 🔱 lyktos</title>
            </Helmet>

            <Section className="has-heaven-bg">
                <Hero>
                    <HeroBody>
                        <Container>
                            <Columns isCentered>
                                <Column isSize={{mobile: 12, tablet: 12, desktop: 10}}>
                                    <Title>Compare Greek and Roman Gods and Goddesses</Title>

                                    <CompareGodsList
                                        godCounterparts={godCounterparts}
                                        isLoading={isLoading}
                                        filterText={filterText}
                                        godsMap={godsMap}
                                    />
                                </Column>
                            </Columns>
                        </Container>
                    </HeroBody>
                </Hero>
            </Section>
        </div>
    );
}

Compare.propTypes = {
    godCounterparts: PropTypes.arrayOf(PropTypes.objectOf(GodPropType)),
    isLoading: PropTypes.bool.isRequired,
    filterText: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
};

export default Compare;
