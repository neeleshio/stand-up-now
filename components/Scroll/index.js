import React, { useEffect, useRef, useState } from 'react';
import { StyledSrcoll } from './styles';

function Scroll({ handleSelect, activeId, dropdown }) {
    let prevDefaul = null;
    let nextDefaul = null;
    let defaul = null;

    const [dropDownList, setDropDownList] = useState(['0:00']);

    useEffect(() => {
        if (dropdown.length) {
            setDropDownList(dropdown);
        } else {
            const arr = [];
            const hour = 24;

            for (let i = 0; i < hour; i++) {
                arr.push(`${i}:00`);
                arr.push(`${i}:30`);
            }

            setDropDownList(arr);
        }
    }, []);

    const handleMouseMove = (e) => {
        if (prevDefaul) {
            prevDefaul.style.fontSize = 18 + 'px';
            prevDefaul.style.fontWeight = '400';
        }

        if (nextDefaul) {
            nextDefaul.style.fontSize = 18 + 'px';
            nextDefaul.style.fontWeight = '400';
        }

        if (defaul) {
            defaul.style.fontSize = 18 + 'px';
        }

        e.target.style.fontSize = 28 + 'px';
        e.target.style.fontWeight = '600';

        if (e.target.previousSibling) {
            e.target.previousSibling.style.fontSize = 20 + 'px';
            prevDefaul = e.target.previousSibling;
        }

        if (e.target.nextSibling) {
            e.target.nextSibling.style.fontSize = 20 + 'px';
            nextDefaul = e.target.nextSibling;
        }

        defaul = e.target;
    };

    return (
        <StyledSrcoll id="holder" onMouseMove={handleMouseMove}>
            <ul id="scroll">
                {dropDownList.map((el, idx) => (
                    <li onClick={() => handleSelect(el, activeId)} key={idx}>
                        {el}
                    </li>
                ))}
            </ul>
        </StyledSrcoll>
    );
}

export default Scroll;
