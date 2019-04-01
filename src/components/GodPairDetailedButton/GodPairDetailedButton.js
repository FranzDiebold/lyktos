import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Column, Button } from 'bloomer';

import { getGodPairUrl } from '../../utils/getGodPairUrl';
import GodPropType from '../../utils/GodPropType';

function GodPairDetailedButton(props) {
    const { godPair } = props;

    const detailIcon = (
        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
    );

    return (
        <Column className="has-text-centered">
            <Link to={getGodPairUrl(godPair)}>
                <Button isOutlined className="is-detailed">
                    <span className="icon">
                        {detailIcon}
                    </span>
                    <span>Detailed comparison</span>
                </Button>
            </Link>
        </Column>
    );
}

GodPairDetailedButton.propTypes = {
    godPair: PropTypes.objectOf(GodPropType).isRequired,
};

export default GodPairDetailedButton;
