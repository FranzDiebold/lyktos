import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import CompareGods from '../pages/CompareGods';
import GodsList from '../pages/GodsList';
import GodDetail from '../pages/GodDetail';
import About from '../pages/About/About';
import SiteNotice from '../pages/SiteNotice';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import NotFound from '../pages/NotFound';
import GodPropType from '../utils/GodPropType';

function Content(props) {
    const { godsData, isLoading, filterText } = props;

    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/compare" />} />
            <Route exact path="/compare" render={() => <CompareGods
                    godCounterparts={godsData.godCounterparts}
                    isLoading={isLoading}
                    filterText={filterText}
                    godsMap={godsData.godsMap}
                />}
            />
            <Route exact path="/greek" render={() => <GodsList
                    type="greek"
                    godsList={godsData.greekGods}
                    isLoading={isLoading}
                    filterText={filterText}
                    godsMap={godsData.godsMap}
                />}
            />
            <Route exact path="/roman" render={() => <GodsList
                    type="roman"
                    godsList={godsData.romanGods}
                    isLoading={isLoading}
                    filterText={filterText}
                    godsMap={godsData.godsMap}
                />}
            />
            <Route exact path="/(greek|roman)/:name([a-z-]+)"
                    render={({ match }) => <GodDetail
                        name={match.params.name}
                        godsMap={godsData.godsMap}
                        isLoading={isLoading}
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
    filterText: PropTypes.string.isRequired,
};

export default Content;
