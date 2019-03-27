import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Section, Hero, HeroBody, Container, Columns, Column, Title } from 'bloomer';

import GodPair from '../components/GodPair/GodPair';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import { godsCounterpartsSortedFilter } from '../utils/godsSortedFilter';
import GodPropType from '../utils/GodPropType';

function Compare(props) {
    const { godCounterparts, isLoading, filterText, godsMap } = props;

    const compareGods = godsCounterpartsSortedFilter(godCounterparts, filterText)
        .map(godPair => <GodPair key={`${godPair.greek.id}-${godPair.roman.id}`} godPair={godPair} godsMap={godsMap} />);

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

                                    {
                                        isLoading ?
                                            <LoadingIndicator /> :
                                            compareGods
                                    }
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
