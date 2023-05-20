import React, { useState } from 'react';
import Scroll from '../Scroll';
import Play from '../Svg/Play';
import { StyledBubbleCard } from './styles';

function BubbleCard({
    show,
    handleOpen,
    name,
    icon,
    id,
    handleSelect,
    suffix,
    dropdown,
    activeId,
    state,
    handlePlaySound,
    standTimerOn
}) {
    return (
        <StyledBubbleCard onClick={() => handleOpen(id)}>
            {activeId === id && show && (
                <Scroll handleSelect={handleSelect} activeId={activeId} dropdown={dropdown} />
            )}
            <div className="icon">{icon}</div>
            <div className="value">
                {state[id] && state[id].value}
                {id === 4 && (
                    <button onClick={(e) => handlePlaySound(e, state[id].value)}>
                        <Play />
                    </button>
                )}
                <span className="suffix">{state[id] && state[id].suffix}</span>
            </div>
            <div className="name">{name}</div>
        </StyledBubbleCard>
    );
}

export default BubbleCard;
