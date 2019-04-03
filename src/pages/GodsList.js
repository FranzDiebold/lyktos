import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import {
    Section,
    Breadcrumb, BreadcrumbItem,
    Columns, Column,
    Title,
    Hero, HeroBody,
} from 'bloomer';

import God from '../components/God/God';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { godsSortedFilter } from '../utils/godsSortedFilter';
import { capitalizeFirstCharacter } from '../utils/capitalizeFirstCharacter';
import GodPropType from '../utils/GodPropType';

function GodsList(props) {
    const { type, godsList, isLoading, error, filterText, godsMap } = props;

    let content;
    if (isLoading) {
        content = <LoadingIndicator />;
    } else if (error) {
        content = <ErrorMessage message={error} />;
    } else {
        const filterSortedGods = godsSortedFilter(godsList, filterText);

        if (filterSortedGods.length > 0) {
            content = filterSortedGods.map(god => <God
                                                    key={god.id}
                                                    god={god}
                                                    showDetailed={false}
                                                    godsMap={godsMap}
                                                />);
        } else {
            content = (
                <Hero>
                    <HeroBody className="has-text-centered">
                        <Title isSize={4}>No gods found.</Title>
                    </HeroBody>
                </Hero>
            );
        }
    }

    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>{capitalizeFirstCharacter(type)} Gods and Goddesses | 🔱 lyktos</title>
            </Helmet>

            <Section className="has-heaven-bg">
                <Columns isCentered>
                    <Column isSize={{mobile: 12, tablet: 10, desktop: 8}}>
                        <Breadcrumb>
                            <ul>
                                <BreadcrumbItem>
                                    <Link to="/compare">Compare</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem isActive>
                                    <Link to={`/compare/${type}`}>{capitalizeFirstCharacter(type)}</Link>
                                </BreadcrumbItem>
                            </ul>
                        </Breadcrumb>

                        <Title>{capitalizeFirstCharacter(type)} Gods and Goddesses</Title>

                        {content}
                    </Column>
                </Columns>
            </Section>
        </div>
    );
}

GodsList.propTypes = {
    type: PropTypes.string.isRequired,
    godsList: PropTypes.arrayOf(GodPropType),
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    filterText: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
};

export default GodsList;
