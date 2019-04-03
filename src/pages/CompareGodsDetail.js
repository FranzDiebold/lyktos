import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import {
    Section,
    Breadcrumb, BreadcrumbItem,
    Columns, Column,
} from 'bloomer';

import GodPair from '../components/GodPair/GodPair';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import NotFound from './NotFound/NotFound';
import GodPropType from '../utils/GodPropType';

function CompareGodsDetail(props) {
    const { nameGreek, nameRoman, godsMap, isLoading } = props;

    if (! isLoading && godsMap) {
        if (! godsMap.hasOwnProperty(nameGreek) || ! godsMap.hasOwnProperty(nameRoman)) {
            return <NotFound />;
        }
        if (godsMap[nameGreek].type !== 'greek' || godsMap[nameRoman].type !== 'roman') {
            return <NotFound />;
        }
        if (godsMap[nameGreek].counterpart !== godsMap[nameRoman].id) {
            return <NotFound />;
        }
    }

    const greekGod = godsMap ? godsMap[nameGreek] : undefined;
    const romanGod = godsMap ? godsMap[nameRoman] : undefined;
    const godPair = godsMap ? { greek: greekGod, roman: romanGod} : undefined;

    return (
        <Section className="has-heaven-bg">
            <Columns isCentered>
                <Column isSize={{mobile: 12, tablet: 12, desktop: 10}}>
                    {
                        isLoading ?
                            <LoadingIndicator /> :
                            <div>
                                <Helmet>
                                    { /* eslint-disable-next-line */ }
                                    <title>{greekGod.emoji} {greekGod.name} vs. {romanGod.emoji} {romanGod.name} | 🔱 lyktos</title>
                                </Helmet>

                                <Breadcrumb>
                                    <ul>
                                        <BreadcrumbItem>
                                            <Link to="/compare">Compare</Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem isActive>
                                            <Link to={`/compare/${greekGod.id}-vs-${romanGod.id}`}>{greekGod.emoji} {greekGod.name} vs. {romanGod.emoji} {romanGod.name}</Link>
                                        </BreadcrumbItem>
                                    </ul>
                                </Breadcrumb>

                                <GodPair
                                    godPair={godPair}
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

CompareGodsDetail.propTypes = {
    nameGreek: PropTypes.string.isRequired,
    nameRoman: PropTypes.string.isRequired,
    godsMap: PropTypes.objectOf(GodPropType),
    isLoading: PropTypes.bool.isRequired,
};

export default CompareGodsDetail;
