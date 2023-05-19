import BubbleCard from '@/components/BubbleCard';
import { BUBBLE_CARD_CONTENTS } from '@/components/contants';
import React, { useState, useEffect } from 'react';
import { StyledControlCenter } from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';

function ControlCenter() {
    const [state, setState] = useState({
        0: { value: '9:00', suffix: 'AM' },
        1: { value: '5:30', suffix: 'PM' },
        2: { value: '30', suffix: 'Min' },
        3: { value: '15', suffix: 'Min' },
        4: { value: 'bells', suffix: '' }
    });
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [activeId, setActiveId] = useState(0);

    useEffect(() => {
        setShow(false);
    }, [state]);

    useEffect(() => {
        const stateCopy = { ...state };

        for (let i = 0; i < 5; i++) {
            if (localStorage[i]) {
                const split = localStorage[i].split(',');
                stateCopy[i]['value'] = split[0];
                stateCopy[i]['suffix'] = split[1];
            } else {
                localStorage.setItem(i, `${stateCopy[i]['value']},${stateCopy[i]['suffix']}`);
            }
        }

        setState(stateCopy);

        console.log('state', state);
    }, []);

    const handleSelect = (item, activeId) => {
        const stateCopy = { ...state };
        stateCopy[activeId]['value'] = item;
        setState(stateCopy);
        localStorage.setItem(activeId, `${item}, ${stateCopy[activeId]['suffix']}`);

        handleMainLogic();
    };

    const handleMainLogic = () => {
        const forEvery = state[2].value;

        // setInterval(() => {
        //     console.log('1');
        // }, 60 * 1000);
    };

    const handleOpen = (id) => {
        setActiveId(id);
        setShow(true);
    };

    const handleToggleSuffix = (id) => {
        const stateCopy = { ...state };

        if (stateCopy[id]['suffix'] === 'AM') {
            stateCopy[id]['suffix'] = 'PM';
            localStorage.setItem(activeId, stateCopy[id]['value'] + ',PM');
        } else if (stateCopy[id]['suffix'] === 'PM') {
            stateCopy[id]['suffix'] = 'AM';
            localStorage.setItem(activeId, stateCopy[id]['value'] + ',AM');
        }

        setState(stateCopy);
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
                    handleToggleSuffix={handleToggleSuffix}
                    handlePlaySound={handlePlaySound}
                    {...el}
                    key={el.id}
                />
            ))}
        </StyledControlCenter>
    );
}

export default ControlCenter;
