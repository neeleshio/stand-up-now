import React from 'react';
import Hamburger from '../Svg/Hamburger';
import Logo from '../Svg/logo';
import { StyledNavbar } from './styles';

function Navbar() {
    return (
        <StyledNavbar>
            <div className="logo-container">
                <Logo />
                <span className="logo-text">Stand Up Now.</span>
            </div>
            <button>
                <Hamburger />
            </button>
        </StyledNavbar>
    );
}

export default Navbar;
