import React from 'react';
import PropTypes from 'prop-types';

import {
    Box, Image,
    Title, Subtitle,
    Columns, Column,
} from 'bloomer';

import GodSymbols from '../GodSymbols/GodSymbols';
import GodParents from '../GodParents/GodParents';
import TypeTag from '../TypeTag/TypeTag';
import GodPairDetailedButton from '../GodPairDetailedButton/GodPairDetailedButton';
import GodDetailedButton from '../GodDetailedButton/GodDetailedButton';
import GodPropType from '../../utils/GodPropType';
import './GodPair.scss';

function GodPair(props) {
    const { godPair, showDetailed, godsMap } = props;
    const greekGod = godPair.greek;
    const romanGod = godPair.roman;

    const showDetailOrDescription = showDetailed ? (
        <Columns isMobile className="content-columns">
            <Column className="god--description">
                {greekGod.description}
            </Column>
            <Column className="god--description">
                {romanGod.description}
            </Column>
        </Columns>
    ) :
    (
        <Columns>
            <GodPairDetailedButton godPair={godPair} />
        </Columns>
    );

    return (
        <Box className="god-pair">
            <div className="god--image">
                <Image src={`/img/gods/${greekGod.type}/${greekGod.id}.svg`} />
            </div>

            <div>
                <Columns isMobile className="content-columns">
                    <Column>
                        <div className="god--type">
                            <TypeTag type={greekGod.type} />
                        </div>
                        <Title className="god--name is-size-2 is-size-3-mobile is-size-4-small-mobile">{greekGod.emoji} {greekGod.name}</Title>
                        <Subtitle className="god--role" isSize={6}>{greekGod.role}</Subtitle>
                    </Column>
                    <Column>
                        <div className="god--type">
                            <TypeTag type={romanGod.type} />
                        </div>
                        <Title className="god--name is-size-2 is-size-3-mobile is-size-4-small-mobile">{romanGod.emoji} {romanGod.name}</Title>
                        <Subtitle className="god--role" isSize={6}>{romanGod.role}</Subtitle>
                    </Column>
                </Columns>

                <Columns isCentered className="label-columns">
                    <Column>
                        <span className="god--label">Symbols</span>
                    </Column>
                </Columns>
                <Columns isMobile className="content-columns">
                    <Column>
                        <GodSymbols symbols={greekGod.symbols} />
                    </Column>
                    <Column>
                        <GodSymbols symbols={romanGod.symbols} />
                    </Column>
                </Columns>

                <Columns isCentered className="label-columns">
                    <Column>
                        <span className="god--label">Parents</span>
                    </Column>
                </Columns>
                <Columns isMobile className="content-columns">
                    <Column>
                        <GodParents parents={greekGod.parents} type={greekGod.type} godsMap={godsMap} />
                    </Column>
                    <Column>
                        <GodParents parents={romanGod.parents} type={romanGod.type} godsMap={godsMap} />
                    </Column>
                </Columns>

                {showDetailOrDescription}

                <Columns isMobile>
                    <GodDetailedButton god={greekGod} />
                    <GodDetailedButton god={romanGod} />
                </Columns>
            </div>
        </Box>
    );
}

GodPair.propTypes = {
    godPair: PropTypes.objectOf(GodPropType).isRequired,
    showDetailed: PropTypes.bool,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default GodPair;
