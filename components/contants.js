import Doc from './Svg/Doc';
import FromTime from './Svg/FromTime';
import ToTime from './Svg/ToTime';
import User from './Svg/User';

export const BUBBLE_CARD_CONTENTS = [
    {
        id: 0,
        name: 'From Time',
        value: '2:30',
        icon: <FromTime />
    },
    {
        id: 1,
        name: 'To Time',
        value: '18:30',
        icon: <ToTime />
    },
    {
        id: 2,
        name: 'For Every',
        value: '5 min',
        icon: <Doc />
    },
    {
        id: 3,
        name: 'Stand For',
        value: '20 min',
        icon: <User />
    }
];

export const ARTICLES = [
    {
        id: 0,
        title: 'Sitting Disease: How a Sedentary Lifestyle Affects Heart Health',
        link: 'https://www.hopkinsmedicine.org/health/wellness-and-prevention/sitting-disease-how-a-sedentary-lifestyle-affects-heart-health',
        image: '/image1.webp'
    }
];
