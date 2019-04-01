import React from 'react';
import { Link } from 'react-router-dom';

import { Column, Button } from 'bloomer';

import { getGodUrl } from '../../utils/getGodUrl';
import GodPropType from '../../utils/GodPropType';

function GodDetailedButton(props) {
    const { god } = props;

    const detailIcon = (
        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
    );

    return (
        <Column className="has-text-centered">
            <Link to={getGodUrl(god)}>
                <Button isOutlined className="is-detailed">
                    <span className="icon">
                        {detailIcon}
                    </span>
                    <span>Detailed</span>
                </Button>
            </Link>
        </Column>
    );
}

GodDetailedButton.propTypes = {
    god: GodPropType.isRequired,
};

export default GodDetailedButton;
