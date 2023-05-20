import ArticleCard from '@/components/ArticleCard';
import { ARTICLES } from '@/components/contants';
import SubControlCard from '@/components/SubControlCard';
import RightArrow from '@/components/Svg/RightArrow';
import { handleInterval, handlePause, handleStart } from '@/redux/mainReducer';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSubController } from '../LandingPage/styles';

function SubController() {
    const [article, setArticle] = useState(0);
    const totalArticles = ARTICLES.length;
    const { start, min, standTimerOn, standMin, pause } = useSelector((store) => store.mainReducer);

    const handleArticleChange = (nav) => {
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

    const handleArticleOpen = (href) => {
        window.open(href, '_blank');
    };

    const handleReset = () => {};

    return (
        <StyledSubController>
            <SubControlCard
                handleStart={handleStart}
                handleReset={handleReset}
                start={start}
                min={min}
                standTimerOn={standTimerOn}
                standMin={standMin}
                pause={pause}
                handlePause={handlePause}
            />
            <ArticleCard
                handleArticleChange={handleArticleChange}
                handleArticleOpen={handleArticleOpen}
                {...ARTICLES[article]}
            />
        </StyledSubController>
    );
}

export default SubController;
