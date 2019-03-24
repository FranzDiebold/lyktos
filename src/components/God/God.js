import React from 'react';
import PropTypes from 'prop-types';

import {
    Box, Image,
    Title, Subtitle,
    Columns, Column,
} from 'bloomer';

import GodSymbols from '../GodSymbols/GodSymbols';
import GodParents from '../GodParents/GodParents';
import GodCounterpart from '../GodCounterpart/GodCounterpart';
import TypeTag from '../TypeTag/TypeTag';
import GodPropType from '../../utils/GodPropType';
import './God.scss';

function God(props) {
    const {god, godsMap} = props;

    return (
        <Box className={`god ${god.type}`}>
            <div className="god--image">
                <Image src={`/img/gods/${god.type}/${god.id}.svg`} />
            </div>
            <div className="god--content">
                <div className="god--type is-pulled-right">
                    <TypeTag type={god.type} />
                </div>
                <Title className="god--name" isSize="2">{god.emoji} {god.name}</Title>
                <Subtitle className="god--role" isSize="6">{god.role}</Subtitle>

                <Columns>
                    <Column>
                        <GodSymbols symbols={god.symbols} />
                    </Column>
                </Columns>

                <Columns>
                    <Column>
                        <GodParents parents={god.parents} type={god.type} godsMap={godsMap} />
                    </Column>
                    <Column>
                        <GodCounterpart counterpart={god.counterpart} godsMap={godsMap} />
                    </Column>
                </Columns>

                <div className="god--description">
                    <p>{god.description}</p>
                </div>
            </div>
        </Box>
    );
}

God.propTypes = {
    god: GodPropType.isRequired,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default God;
