import React from 'react';
import Calender from '../Svg/Calender';
import { StyledHeader } from './styles';
import greetingTime from 'greeting-time';

function Header() {
    const date = new Date();
    const dateArray = date.toString().split(' ');
    const greeting = greetingTime(new Date());

    return (
        <StyledHeader>
            <div className="hi-text">
                <span>Hi, Ann</span>
                <span>Check your Activity 👋</span>
            </div>
            <div className="date-container">
                <div className="date-wrapper">
                    <Calender />
                    <div className="date">
                        <span>{dateArray[2]}</span>
                        <span>{dateArray[1]}</span>
                    </div>
                </div>
                <div className="greetings">
                    <span>{greeting}</span>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header;
