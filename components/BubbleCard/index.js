import React from 'react';
import { StyledBubbleCard } from './styles';

function BubbleCard({ name, value, icon }) {
    return (
        <StyledBubbleCard>
            <div className="icon">{icon}</div>
            <div className="value">{value}</div>
            <div className="name">{name}</div>
        </StyledBubbleCard>
    );
}

export default BubbleCard;
