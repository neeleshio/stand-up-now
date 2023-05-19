import ArticleCard from '@/components/ArticleCard';
import { ARTICLES } from '@/components/contants';
import SubControlCard from '@/components/SubControlCard';
import RightArrow from '@/components/Svg/RightArrow';
import { handleInterval } from '@/redux/mainReducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledSubController } from '../LandingPage/styles';

function SubController() {
    const [start, setStart] = useState(false);
    const [article, setArticle] = useState(0);
    const totalArticles = ARTICLES.length;
    const dispatch = useDispatch();

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

    const handleStart = () => {
        setStart((prev) => !prev);
        dispatch(handleInterval());
    };

    const handleReset = () => {};

    return (
        <StyledSubController>
            <SubControlCard handleStart={handleStart} handleReset={handleReset} start={start} />
            <ArticleCard
                handleArticleChange={handleArticleChange}
                handleArticleOpen={handleArticleOpen}
                {...ARTICLES[article]}
            />
        </StyledSubController>
    );
}

export default SubController;
