import React from 'react';
import RightArrow from '../Svg/RightArrow';
import { StyledArticleCard } from './styles';

function ArticleCard({ title, link, image, handleArticleChange, handleArticleOpen }) {
    return (
        <StyledArticleCard>
            <button className="left-arrow" onClick={() => handleArticleChange('prev')}>
                <RightArrow />
            </button>
            <div className="article-content">
                <div className="img-container">
                    <img src={image} alt="article-image" />
                </div>
                <div className="title-and-btn">
                    <span className="title">{title}</span>
                    <button onClick={() => handleArticleOpen(link)}>Read</button>
                </div>
            </div>
            <button className="right-arrow" onClick={() => handleArticleChange('next')}>
                <RightArrow />
            </button>
        </StyledArticleCard>
    );
}

export default ArticleCard;
