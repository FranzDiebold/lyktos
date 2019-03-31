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
import ShowDetailedButton from '../ShowDetailedButton/ShowDetailedButton';
import GodPropType from '../../utils/GodPropType';
import './God.scss';

function God(props) {
    const { god, showDetailed, godsMap } = props;

    const showDetailOrDescription = showDetailed ? (
            <Column className="god--description">
                {god.description}
            </Column>
        ) :
        (
            <ShowDetailedButton god={god} />
        );

    return (
        <Box className={`god ${god.type}-bg`}>
            <div className="god--image">
                <Image src={`/img/gods/${god.type}/${god.id}.svg`} />
            </div>

            <div>
                <div className="god--type">
                    <TypeTag type={god.type} />
                </div>
                <Title className="god--name" isSize={2}>{god.emoji} {god.name}</Title>
                <Subtitle className="god--role" isSize={6}>{god.role}</Subtitle>

                <Columns>
                    <Column>
                        <span className="god--label">Symbols</span>
                        <GodSymbols symbols={god.symbols} />
                    </Column>
                </Columns>

                <Columns>
                    <Column>
                        <span className="god--label">Parents</span>
                        <GodParents parents={god.parents} type={god.type} godsMap={godsMap} />
                    </Column>
                    <Column>
                        <span className="god--label">Counterpart</span>
                        <GodCounterpart counterpart={god.counterpart} godsMap={godsMap} />
                    </Column>
                </Columns>

                <Columns>
                    {showDetailOrDescription}
                </Columns>
            </div>
        </Box>
    );
}

God.propTypes = {
    god: GodPropType.isRequired,
    showDetailed: PropTypes.bool,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default God;
