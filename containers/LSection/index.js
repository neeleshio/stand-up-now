import ArticleCard from '@/components/ArticleCard';
import { ARTICLES, BUBBLE_CARD_CONTENTS } from '@/components/contants';
import Navbar from '@/components/Navbar';
import Calender from '@/components/Svg/Calender';
import RightArrow from '@/components/Svg/RightArrow';
import StringVector from '@/components/Svg/StringVector';
import React, { useState } from 'react';
import { StyledLSection } from './styles';
import greetingTime from 'greeting-time';
import Pause from '@/components/Svg/Pause';
import Reset from '@/components/Svg/Reset';
import Resume from '@/components/Svg/Resume';
import Scroll from '@/components/Scroll';
import BubbleCard from '@/components/BubbleCard';

function LSection() {
    const date = new Date();
    const dateArray = date.toString().split(' ');
    const [article, setArticle] = useState(0);
    const totalArticles = ARTICLES.length;
    const greeting = greetingTime(new Date());
    const [pause, setPause] = useState(false);

    const handleArtcileChange = (nav) => {
        if (nav === 'prev') {
            if (article === 0) {
                setArticle(totalArticles - 1);
            } else {
                setArticle((prev) => prev - 1);
            }
        } else {
            if (article === totalArticles - 1) {
                setArticle(0);
            } else {
                setArticle((prev) => prev + 1);
            }
        }
    };

    const handlePause = () => {
        setPause((prev) => !prev);
    };

    const handleReset = () => {};

    return (
        <StyledLSection pause={pause}>
            {/* <Navbar /> */}
            <div>
                {/* <div className="header-container">
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
                </div> */}

                <div className="bubble-card-container">
                    {BUBBLE_CARD_CONTENTS.map((el) => (
                        <BubbleCard {...el} key={el.id} />
                    ))}
                </div>

                {/* <div className="graph-container">
                    <div className="graph1">
                        <span className="activity">Activity Graph</span>
                        <span className="no-data">No data available</span>
                    </div>

                    <div className="graph">
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
                    </div>
                </div>

                <div className="article-container">
                    <button className="left-arrow" onClick={() => handleArtcileChange('prev')}>
                        <RightArrow />
                    </button>
                    <ArticleCard {...ARTICLES[article]} />
                    <button className="right-arrow" onClick={() => handleArtcileChange('next')}>
                        <RightArrow />
                    </button>
                </div> */}
            </div>
        </StyledLSection>
    );
}

export default LSection;
