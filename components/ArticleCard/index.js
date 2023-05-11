import React from 'react';
import RightArrow from '../Svg/RightArrow';
import { StyledArticleCard } from './styles';

function ArticleCard({ title, link, image }) {
    const handleArticleOpen = (href) => {
        window.open(href, '_blank');
    };

    return (
        <StyledArticleCard>
            <div className="img-container">
                <img src={image} alt="article-image" />
            </div>
            <div className="title-and-btn">
                <span className="title">{title}</span>
                <button onClick={() => handleArticleOpen(link)}>Read</button>
            </div>
        </StyledArticleCard>
    );
}

export default ArticleCard;
