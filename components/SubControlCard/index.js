import React from 'react';
import { useDispatch } from 'react-redux';
import Pause from '../Svg/Pause';
import Reset from '../Svg/Reset';
import Resume from '../Svg/Resume';
import Stop from '../Svg/Stop';
import StringVector from '../Svg/StringVector';
import { StyledControlCard } from './styles';

function ControlCard({
    handleStart,
    handleReset,
    start,
    min,
    standTimerOn,
    standMin,
    pause,
    handlePause
}) {
    const dispatch = useDispatch();

    return (
        <StyledControlCard start={start}>
            <div className="graph-img">
                <StringVector />
            </div>
            <div className="graph-content">
                <div className="text-content">
                    {standTimerOn ? (
                        <span className="text-1">Stand up for</span>
                    ) : (
                        <span className="text-1">Next Alert in</span>
                    )}
                    {start ? (
                        <span className="text-3">
                            {standTimerOn ? standMin : min} <span className="text-3-min">min</span>
                        </span>
                    ) : (
                        <span className="text-3">
                            <span className="text-3-min">Click start to activate</span>
                        </span>
                    )}
                </div>
                <div className="btn-content">
                    <button onClick={() => dispatch(handleStart())}>
                        {start ? (
                            <>
                                <Stop />
                                <span>Stop</span>
                            </>
                        ) : (
                            <>
                                <Resume />
                                <span>Start</span>
                            </>
                        )}
                    </button>
                    <button onClick={() => dispatch(handlePause())}>
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
                </div>
            </div>
        </StyledControlCard>
    );
}

export default ControlCard;
