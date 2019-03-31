import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tag } from 'bloomer';

import './TypeTag.scss';

function TypeTag(props) {
    const { type } = props;

    return (
        <Link to={`/compare/${type}`} className="type">
            <Tag isSize="medium" className={type}>{type}</Tag>
        </Link>
    );
}

TypeTag.propTypes = {
    type: PropTypes.string.isRequired,
};

export default TypeTag;
