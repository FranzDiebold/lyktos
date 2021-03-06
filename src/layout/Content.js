import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import CompareGodsList from '../pages/CompareGodsList';
import CompareGodsDetail from '../pages/CompareGodsDetail';
import GodsList from '../pages/GodsList';
import GodDetail from '../pages/GodDetail';
import About from '../pages/About/About';
import SiteNotice from '../pages/SiteNotice/SiteNotice';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import NotFound from '../pages/NotFound/NotFound';
import GodPropType from '../utils/GodPropType';

function Content(props) {
    const { godsData, isLoading, error, filterText } = props;

    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/compare" />} />
            <Route exact path="/compare" render={() => <CompareGodsList
                    godCounterparts={godsData.godCounterparts}
                    isLoading={isLoading}
                    error={error}
                    filterText={filterText}
                    godsMap={godsData.godsMap}
                />}
            />
            <Route exact path="/compare/:nameGreek([a-z-]+)-vs-:nameRoman([a-z-]+)"
                    render={({ match }) => <CompareGodsDetail
                        nameGreek={match.params.nameGreek}
                        nameRoman={match.params.nameRoman}
                        godsMap={godsData.godsMap}
                        isLoading={isLoading}
                        error={error}
                    />}
            />
            <Route exact path="/compare/greek" render={() => <GodsList
                    type="greek"
                    godsList={godsData.greekGods}
                    isLoading={isLoading}
                    error={error}
                    filterText={filterText}
                    godsMap={godsData.godsMap}
                />}
            />
            <Route exact path="/compare/roman" render={() => <GodsList
                    type="roman"
                    godsList={godsData.romanGods}
                    isLoading={isLoading}
                    error={error}
                    filterText={filterText}
                    godsMap={godsData.godsMap}
                />}
            />
            <Route exact path="/compare/:type(greek|roman)/:name([a-z-]+)"
                    render={({ match }) => <GodDetail
                        type={match.params.type}
                        name={match.params.name}
                        godsMap={godsData.godsMap}
                        isLoading={isLoading}
                        error={error}
                    />}
            />

            <Route exact path="/about" component={About} />

            <Route exact path="/site-notice" component={SiteNotice} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />

            <Route component={NotFound} />
        </Switch>
    );
}

Content.propTypes = {
    godsData: PropTypes.shape({
        godsList: PropTypes.arrayOf(GodPropType),
        godCounterparts: PropTypes.arrayOf(PropTypes.objectOf(GodPropType)),
        godsMap: PropTypes.objectOf(GodPropType),
        greekGods: PropTypes.arrayOf(GodPropType),
        romanGods: PropTypes.arrayOf(GodPropType),
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    filterText: PropTypes.string.isRequired,
};

export default Content;
