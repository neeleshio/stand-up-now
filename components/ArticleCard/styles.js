import styled from 'styled-components';

export const StyledArticleCard = styled.div`
    display: flex;
    padding: 0 50px;
    border: 0.5px solid #fff;
    border-radius: 20px;
    width: 100%;
    margin: 0 10px;

    .img-container {
        max-height: 200px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            max-height: 170px;
            object-fit: cover;
            border-radius: 5px;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
        }
    }

    .title-and-btn {
        display: flex;
        flex-direction: column;
        margin: 35px 0 35px 70px;

        .title {
            font-size: 25px;
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
`;
