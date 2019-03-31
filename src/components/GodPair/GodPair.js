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
import ShowDetailedButton from '../ShowDetailedButton/ShowDetailedButton';
import GodPropType from '../../utils/GodPropType';
import './GodPair.scss';

function GodPair(props) {
    const { godPair, godsMap } = props;
    const greekGod = godPair.greek;
    const romanGod = godPair.roman;

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
                        <Title className="god--name" isSize={2}>{greekGod.emoji} {greekGod.name}</Title>
                        <Subtitle className="god--role" isSize={6}>{greekGod.role}</Subtitle>
                    </Column>
                    <Column>
                        <div className="god--type">
                            <TypeTag type={romanGod.type} />
                        </div>
                        <Title className="god--name" isSize={2}>{romanGod.emoji} {romanGod.name}</Title>
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

                <Columns isMobile>
                    <ShowDetailedButton god={greekGod} />
                    <ShowDetailedButton god={romanGod} />
                </Columns>
            </div>
        </Box>
    );
}

GodPair.propTypes = {
    godPair: PropTypes.objectOf(GodPropType).isRequired,
    godsMap: PropTypes.objectOf(GodPropType).isRequired,
};

export default GodPair;
