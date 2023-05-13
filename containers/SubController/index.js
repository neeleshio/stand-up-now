import ArticleCard from '@/components/ArticleCard';
import { ARTICLES } from '@/components/contants';
import SubControlCard from '@/components/SubControlCard';
import RightArrow from '@/components/Svg/RightArrow';
import React, { useState } from 'react';
import { StyledSubController } from '../LandingPage/styles';

function SubController() {
    const [pause, setPause] = useState(false);
    const [article, setArticle] = useState(0);
    const totalArticles = ARTICLES.length;

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

    const handlePause = () => {
        setPause((prev) => !prev);
    };

    const handleReset = () => {};

    return (
        <StyledSubController>
            <SubControlCard handlePause={handlePause} handleReset={handleReset} pause={pause} />
            <ArticleCard
                handleArticleChange={handleArticleChange}
                handleArticleOpen={handleArticleOpen}
                {...ARTICLES[article]}
            />
        </StyledSubController>
    );
}

export default SubController;
