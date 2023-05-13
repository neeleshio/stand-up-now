import BubbleCard from '@/components/BubbleCard';
import { BUBBLE_CARD_CONTENTS } from '@/components/contants';
import React, { useState, useEffect } from 'react';
import { StyledControlCenter } from './styles';
import moment from 'moment';

function ControlCenter() {
    const [state, setState] = useState({
        0: { value: '9:00', suffix: 'AM' },
        1: { value: '5:30', suffix: 'PM' },
        2: { value: '30', suffix: 'Min' },
        3: { value: '15', suffix: 'Min' },
        4: { value: 'bells', suffix: '' }
    });
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
            }
        }

        setState(stateCopy);
    }, []);

    const handleSelect = (item, activeId) => {
        const stateCopy = { ...state };
        stateCopy[activeId]['value'] = item;
        setState(stateCopy);
        localStorage.setItem(activeId, `${item}, ${stateCopy[activeId]['suffix']}`);

        const a = moment();
        const c = moment('7:30 am', 'hh:mm a');
        const d = moment('9:30 pm', 'hh:mm a');

        const duration = moment.duration(d.diff(c));

        console.log(parseInt(duration.asHours()));

        // const b = moment().add(30, 'm').format('hh:mm A');
        // console.log('b', b);
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
        } else {
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
