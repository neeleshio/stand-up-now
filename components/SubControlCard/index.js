import React from 'react';
import Pause from '../Svg/Pause';
import Reset from '../Svg/Reset';
import Resume from '../Svg/Resume';
import StringVector from '../Svg/StringVector';
import { StyledControlCard } from './styles';

function ControlCard({ handlePause, handleReset, pause }) {
    return (
        <StyledControlCard>
            <div className="graph-img">
                <StringVector />
            </div>
            <div className="graph-content">
                <div className="text-content">
                    <span className="text-1">Next Alert in</span>
                    <span className="text-3">
                        30 <span className="text-3-min">min</span>
                    </span>
                </div>
                <div className="btn-content">
                    <button onClick={handlePause}>
                        {pause ? (
                            <>
                                <Resume />
                                <span>Resume</span>
                            </>
                        ) : (
                            <>
                                <Pause />
                                <span>Pause</span>
                            </>
                        )}
                    </button>
                    <button onClick={handleReset}>
                        <Reset />
                        <span>Reset</span>
                    </button>
                </div>
            </div>
        </StyledControlCard>
    );
}

export default ControlCard;