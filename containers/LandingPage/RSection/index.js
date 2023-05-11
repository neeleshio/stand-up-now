import BubbleCard from '@/components/BubbleCard';
import { BUBBLE_CARD_CONTENTS } from '@/components/contants';
import BubbleBg from '@/components/Svg/BubbleBg';
import React from 'react';
import { StyledRSection } from './styles';

function RSection() {
    return (
        <StyledRSection>
            <div className="user-profile-container">
                <div className="bubble-bg">
                    <BubbleBg />
                </div>
                <div className="img-username-conatiner">
                    <div className="img-container">
                        <img src="/avatar.webp" width={130} />
                    </div>
                    <p className="user-name">Mrs. Ann</p>
                </div>
            </div>
            <div className="bubble-card-container">
                {BUBBLE_CARD_CONTENTS.map((el) => (
                    <BubbleCard {...el} key={el.id} />
                ))}
            </div>
            <div></div>
        </StyledRSection>
    );
}

export default RSection;
