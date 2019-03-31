import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Section,
    Breadcrumb, BreadcrumbItem,
    Columns, Column,
} from 'bloomer';

import God from '../components/God/God';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import { capitalizeFirstCharacter } from '../utils/capitalizeFirstCharacter';
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
            <Columns isCentered>
                <Column isSize={{mobile: 12, tablet: 10, desktop: 8}}>
                    {
                        isLoading ?
                            <LoadingIndicator /> :
                            <div>
                                <Breadcrumb>
                                    <ul>
                                        <BreadcrumbItem>
                                            <Link to={`/${god.type}`}>{capitalizeFirstCharacter(god.type)}</Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem isActive>
                                            <a href>{god.name}</a>
                                        </BreadcrumbItem>
                                    </ul>
                                </Breadcrumb>
                                <God
                                    god={god}
                                    showDetailed={true}
                                    godsMap={godsMap}
                                />
                            </div>
                    }
                </Column>
            </Columns>
        </Section>
    );
}

GodDetail.propTypes = {
    name: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
    isLoading: PropTypes.bool.isRequired
};

export default GodDetail;
