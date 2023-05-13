import BubbleCard from '@/components/BubbleCard';
import { BUBBLE_CARD_CONTENTS } from '@/components/contants';
import BubbleBg from '@/components/Svg/BubbleBg';
import Pause from '@/components/Svg/Pause';
import Reset from '@/components/Svg/Reset';
import Resume from '@/components/Svg/Resume';
import StringVector from '@/components/Svg/StringVector';
import React, { useState } from 'react';
import { StyledRSection } from './styles';

function RSection() {
    const [pause, setPause] = useState(false);

    const handlePause = () => {
        setPause((prev) => !prev);
    };

    const handleReset = () => {};
    return (
        <StyledRSection>
            {/* <div className="user-profile-container">
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
            <div></div> */}

            <div className="graph-container">
                <div className="graph1">
                    <span className="activity">Activity Graph</span>
                    <span className="no-data">No data available</span>
                </div>

                <div className="graph"></div>
            </div>
        </StyledRSection>
    );
}

export default RSection;
