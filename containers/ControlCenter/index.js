import BubbleCard from '@/components/BubbleCard';
import { BUBBLE_CARD_CONTENTS } from '@/components/contants';
import React, { useState, useEffect } from 'react';
import { StyledControlCenter } from './styles';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
    handleInterval,
    handleMinute,
    handleStandMinute,
    handleStandInterval,
    hanldeStandTimer
} from '@/redux/mainReducer';

function ControlCenter() {
    const [state, setState] = useState({
        0: { value: '9:00', suffix: '' },
        1: { value: '17:30', suffix: '' },
        2: { value: '30', suffix: 'Min' },
        3: { value: '15', suffix: 'Min' },
        4: { value: 'bells', suffix: '' }
    });
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [activeId, setActiveId] = useState(0);
    const { start, min, standMin } = useSelector((store) => store.mainReducer);
    const [timer, setTimer] = useState(0);
    const [standTimer, setStandTimer] = useState(0);

    useEffect(() => {
        setShow(false);
    }, [state]);

    useEffect(() => {
        if (start) {
            handleMainLogic();
        }
    }, [start]);

    useEffect(() => {
        if (min === 0) {
            clearInterval(timer);
            handleStandTimer();
        }
    }, [min]);

    useEffect(() => {
        if (standMin === 0) {
            clearInterval(standTimer);
            handleMainLogic();
        }
    }, [standMin]);

    useEffect(() => {
        const stateCopy = { ...state };

        for (let i = 0; i < 5; i++) {
            if (localStorage[i]) {
                stateCopy[i]['value'] = localStorage[i];
            } else {
                localStorage.setItem(i, stateCopy[i]['value']);
            }
        }

        setState(stateCopy);
    }, []);

    const handleSelect = (item, activeId) => {
        const stateCopy = { ...state };
        stateCopy[activeId]['value'] = item;
        setState(stateCopy);
        localStorage.setItem(activeId, item);
    };

    const handleMainLogic = () => {
        // const currentTime = moment().add(parseInt(state[2].value), 'm');
        // const beforeTime = moment(parseInt(state[0].value), 'HH:MM');
        // const afterTime = moment(parseInt(state[1].value), 'HH:MM');

        // if (currentTime.isBetween(beforeTime, afterTime)) {
        //     setTimeout(() => {
        //         dispatch(handleInterval());
        //     }, 1000 * 60);
        // }
        dispatch(hanldeStandTimer(false));
        dispatch(handleMinute(state[2].value));
        setTimer(
            setInterval(() => {
                dispatch(handleInterval());
            }, 1000 * 60)
        );
    };

    const handleStandTimer = () => {
        const sound = state[4].value;

        const audio = new Audio(`/${sound}.mp3`);
        audio.play();

        dispatch(hanldeStandTimer(true));
        dispatch(handleStandMinute(state[3].value));

        setStandTimer(
            setInterval(() => {
                dispatch(handleStandInterval());
            }, 1000 * 60)
        );
    };

    const handleOpen = (id) => {
        setActiveId(id);
        setShow(true);
    };

    const handlePlaySound = (e, sound) => {
        e.stopPropagation();

        const audio = new Audio(`/${sound}.mp3`);
        audio.play();
    };

    return (
        <StyledControlCenter>
            {BUBBLE_CARD_CONTENTS.map((el) => (
                <BubbleCard
                    show={show}
                    handleOpen={handleOpen}
                    activeId={activeId}
                    state={state}
                    handleSelect={handleSelect}
                    handlePlaySound={handlePlaySound}
                    {...el}
                    key={el.id}
                />
            ))}
        </StyledControlCenter>
    );
}

export default ControlCenter;
