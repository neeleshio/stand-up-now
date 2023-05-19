import styled from 'styled-components';

export const StyledLandingPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: 100vh;

    .section-container {
        flex-direction: row;
        margin: 0 30px;
    }

    @media screen and (max-width: 1080px) {
        .section-container {
            margin: 0 15px;
        }
    }

    @media screen and (max-width: 440px) {
        padding: 30px 15px;
    }
`;

export const StyledSubController = styled.div`
    display: flex;
    justify-content: space-between;

    .article-container {
        display: flex;
    }

    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
`;
