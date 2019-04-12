import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Container,
    Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarEnd,
    Control, Input,
} from 'bloomer';

function showFilter(pathname) {
    const pattern = /^\/compare(\/greek|\/roman)?$/i;
    return pattern.test(pathname);
}

function Header(props) {
    const [filterText, setFilterText] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const searchIcon = (
        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
    );

    const filter = showFilter(props.location.pathname) ?
    (
        <NavbarItem>
            <Control hasIcons>
                <Input
                    type="text"
                    value={filterText}
                    onChange={changeFilterText}
                    size={12}
                    placeholder="Search gods..."
                />
                <span className="icon is-left">
                    {searchIcon}
                </span>
            </Control>
        </NavbarItem>
    ) : '';

    const aboutIcon = (
        <span className="icon">
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
        </span>
    );
    const alexaIcon = (
        <span className="icon">
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10.43,21.87V19.91C10.43,19.22 10,18.57 9.35,18.3C6.91,17.26 5.17,14.83 5.17,12C5.17,8.26 8.22,5.17 12,5.17C15.78,5.17 18.83,8.26 18.83,12C18.83,16.43 15.39,20.61 10.43,21.87Z" />
            </svg>
        </span>
    );
    const githubIcon = (
        <span className="icon">
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
        </span>
    );

    function toggleMobileMenu() {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    function changeFilterText(event) {
        const filterValue = event.target.value;
        setFilterText(filterValue);
        props.setFilterText(filterValue);
    }

    return (
        <Navbar>
            <Container>
                <NavbarBrand>
                    <NavbarItem href="/">
                        <span className="is-size-4" role="img" aria-label="trident">🔱</span>
                    </NavbarItem>
                    {filter}
                    <NavbarBurger isActive={mobileMenuOpen} onClick={toggleMobileMenu} />
                </NavbarBrand>
                <NavbarMenu isActive={mobileMenuOpen} onClick={toggleMobileMenu}>
                    <NavbarEnd>
                        <NavLink className="navbar-item" to="/compare" activeClassName="is-active">Compare</NavLink>
                        <NavLink className="navbar-item" to="/compare/greek" activeClassName="is-active">Greek</NavLink>
                        <NavLink className="navbar-item" to="/compare/roman" activeClassName="is-active">Roman</NavLink>
                        <NavLink className="navbar-item" to="/about" activeClassName="is-active">{aboutIcon}</NavLink>
                        <NavbarItem href="https://www.amazon.com/alexa-skills/b/?node=13727921011" target="_blank" className="tooltip is-tooltip-bottom" data-tooltip="'Alexa, open mythology land'">{alexaIcon}</NavbarItem>
                        <NavbarItem href="https://github.com/FranzDiebold/lyktos" target="_blank">{githubIcon}</NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Container>
        </Navbar>
    );
}

Header.propTypes = {
    setFilterText: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
};

export default withRouter(Header);
