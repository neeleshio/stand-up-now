import ControlCard from '@/components/SubControlCard';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import ControlCenter from '../ControlCenter';
import { StyledLandingPage } from './styles';
import SubController from '../SubController';

function LandingPage() {
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
