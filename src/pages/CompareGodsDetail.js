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
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import NotFound from './NotFound/NotFound';
import GodPropType from '../utils/GodPropType';

function CompareGodsDetail(props) {
    const { nameGreek, nameRoman, godsMap, isLoading, error } = props;

    let content;
    if (isLoading) {
        content = <LoadingIndicator />;
    } else if (error) {
        content = <ErrorMessage message={error} />;
    } else {
        const greekGod = godsMap[nameGreek];
        const romanGod = godsMap[nameRoman];

        if (! greekGod || ! romanGod) {
            return <NotFound />;
        } else if (greekGod.type !== 'greek' || romanGod.type !== 'roman') {
            return <NotFound />;
        } else if (greekGod.counterpart !== romanGod.id) {
            return <NotFound />;
        }

        const godPair = { greek: greekGod, roman: romanGod};

        content = (
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
        );
    }

    return (
        <Section className="has-heaven-bg is-wider-on-small-mobile">
            <Columns isCentered>
                <Column isSize={{mobile: 12, tablet: 12, desktop: 10}}>
                    {content}
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
    error: PropTypes.string,
};

export default CompareGodsDetail;
