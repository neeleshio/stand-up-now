import Navbar from '@/components/Navbar';
import React from 'react';
import LSection from './LSection';
import RSection from './RSection';
import { StyledLandingPage } from './styles';

function LandingPage() {
    return (
        <StyledLandingPage>
            <LSection />
            <RSection />
        </StyledLandingPage>
    );
}

export default LandingPage;
