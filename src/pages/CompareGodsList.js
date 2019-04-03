import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Hero, HeroBody, Container, Columns, Column, Title } from 'bloomer';

import GodPair from '../components/GodPair/GodPair';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { godsCounterpartsSortedFilter } from '../utils/godsSortedFilter';
import GodPropType from '../utils/GodPropType';

function CompareGodsList(props) {
    const { godCounterparts, isLoading, error, filterText, godsMap } = props;

    let content;
    if (isLoading) {
        content = <LoadingIndicator />;
    } else if (error) {
        content = <ErrorMessage message={error} />;
    } else {
        content = godsCounterpartsSortedFilter(godCounterparts, filterText)
                    .map(godPair => <GodPair
                                        key={`${godPair.greek.id}-${godPair.roman.id}`}
                                        godPair={godPair}
                                        showDetailed={false}
                                        godsMap={godsMap}
                                    />);
    }

    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>Compare Greek and Roman Gods and Goddesses | 🔱 lyktos</title>
            </Helmet>

            <Hero className="has-heaven-bg">
                <HeroBody>
                    <Container>
                        <Columns isCentered>
                            <Column isSize={{mobile: 12, tablet: 12, desktop: 10}}>
                                <Title>Compare Greek and Roman Gods and Goddesses</Title>

                                {content}
                            </Column>
                        </Columns>
                    </Container>
                </HeroBody>
            </Hero>
        </div>
    );
}

CompareGodsList.propTypes = {
    godCounterparts: PropTypes.arrayOf(PropTypes.objectOf(GodPropType)),
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    filterText: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
};

export default CompareGodsList;
