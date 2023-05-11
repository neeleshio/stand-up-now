import ArticleCard from '@/components/ArticleCard';
import { ARTICLES } from '@/components/contants';
import Navbar from '@/components/Navbar';
import Calender from '@/components/Svg/Calender';
import RightArrow from '@/components/Svg/RightArrow';
import StringVector from '@/components/Svg/StringVector';
import React from 'react';
import { StyledLSection } from './styles';

function LSection() {
    const date = new Date();
    const dateArray = date.toString().split(' ');

    return (
        <StyledLSection>
            <Navbar />
            <div>
                <div className="header-container">
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
                            <span>Good Moring</span>
                        </div>
                    </div>
                </div>

                <div className="graph-container">
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
                                <button>Pause</button>
                                <button>Reset</button>
                            </div>
                        </div>
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
                                <button>Pause</button>
                                <button>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="article-container">
                    <div className="left-arrow">
                        <RightArrow />
                    </div>
                    {ARTICLES.map((el) => (
                        <ArticleCard {...el} key={el.id} />
                    ))}
                    <div className="right-arrow">
                        <RightArrow />
                    </div>
                </div>
            </div>
        </StyledLSection>
    );
}

export default LSection;
