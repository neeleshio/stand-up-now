import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import ControlCenter from '../ControlCenter';
import { StyledLandingPage } from './styles';
import SubController from '../SubController';

function LandingPage() {
    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <StyledLandingPage>
            <Navbar />
            <div className="section-container">
                <Header />
                <ControlCenter />
                <SubController />
            </div>
        </StyledLandingPage>
    );
}

export default LandingPage;
