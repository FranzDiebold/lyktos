import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tag } from 'bloomer';

import { getGodUrl } from '../../utils/getGodUrl';
import { capitalizeFirstCharacter } from '../../utils/capitalizeFirstCharacter';
import GodPropType from '../../utils/GodPropType';
import './GodTag.scss';

function GodTag(props) {
    const { name, type, godsMap } = props;

    if (name in godsMap) {
        const god = godsMap[name];
        return (
            <Link to={getGodUrl(god)} className="god-tag control">
                <div className="tags has-addons are-medium">
                    <Tag>{god.emoji}</Tag>
                    <Tag className={god.type}>{god.name}</Tag>
                </div>
            </Link>
        );
    } else {
        return (
            <div className="god-tag control">
                <div className="tags has-addons are-medium">
                    <Tag></Tag>
                    <Tag className={type}>{capitalizeFirstCharacter(name)}</Tag>
                </div>
            </div>
        );
    }
}

GodTag.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default GodTag;
