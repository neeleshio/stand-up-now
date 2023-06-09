import styled from 'styled-components';

export const StyledArticleCard = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    width: 57%;
    height: 220px;
    background: #181818;

    .img-container {
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            max-height: 170px;
            object-fit: cover;
            border-radius: 5px;
        }
    }

    .right-arrow,
    .left-arrow {
        border: 0px solid #414141;
        padding: 10px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: none;
        cursor: pointer;
        margin: 2px 5px;
    }

    .left-arrow {
        svg {
            transform: rotate(180deg);
        }
    }

    .title-and-btn {
        display: flex;
        flex-direction: column;
        margin: 35px;

        .title {
            display: block;
            font-size: 1.3rem;
            font-weight: 200;
        }

        button {
            border: 1px solid #4b4b4b;
            padding: 13px 20px;
            border-radius: 16px;
            background: #000000;
            width: 80px;
            font-weight: 200;
            margin-top: 30px;
            cursor: pointer;
        }
    }

    .article-content {
        display: flex;
        padding-left: 10px;
    }

    @media screen and (max-width: 1300px) {
        .title-and-btn {
            .title {
                font-size: 18px;
            }
        }
    }

    @media screen and (max-width: 1080px) {
        width: 100%;
        /* margin-bottom: 50px; */
    }

    @media screen and (max-width: 690px) {
        height: 100%;
        padding-top: 30px;

        .article-content {
            flex-direction: column;
            padding-left: 0;

            .title-and-btn {
                margin: 30px 0;
            }
        }
    }

    @media screen and (max-width: 410px) {
        .img-container {
            img {
                width: 100%;
            }
        }
    }
`;
