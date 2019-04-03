import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import {
    Section,
    Breadcrumb, BreadcrumbItem,
    Columns, Column,
} from 'bloomer';

import God from '../components/God/God';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { capitalizeFirstCharacter } from '../utils/capitalizeFirstCharacter';
import NotFound from './NotFound/NotFound';
import GodPropType from '../utils/GodPropType';

function GodDetail(props) {
    const { type, name, godsMap, isLoading, error } = props;

    let content;
    if (isLoading) {
        content = <LoadingIndicator />;
    } else if (error) {
        content = <ErrorMessage message={error} />;
    } else {
        const god = godsMap[name];

        if (! god || type !== god.type) {
            return <NotFound />;
        }

        content = (
            <div>
                <Helmet>
                    { /* eslint-disable-next-line */ }
                    <title>{god.emoji} {god.name} | 🔱 lyktos</title>
                </Helmet>

                <Breadcrumb>
                    <ul>
                        <BreadcrumbItem>
                            <Link to="/compare">Compare</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to={`/compare/${god.type}`}>{capitalizeFirstCharacter(god.type)}</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem isActive>
                            <Link to={`/compare/${god.type}/${god.id}`}>{god.emoji} {god.name}</Link>
                        </BreadcrumbItem>
                    </ul>
                </Breadcrumb>

                <God
                    god={god}
                    showDetailed={true}
                    godsMap={godsMap}
                />
            </div>
        );
    }

    return (
        <Section className="has-heaven-bg">
            <Columns isCentered>
                <Column isSize={{mobile: 12, tablet: 10, desktop: 8}}>
                    {content}
                </Column>
            </Columns>
        </Section>
    );
}

GodDetail.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default GodDetail;
