import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .hi-text {
        font-size: 40px;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    .date-container {
        display: flex;
        height: 80px;

        .date-wrapper,
        .greetings {
            display: flex;
            align-items: center;
            border: 1px solid #424242;
            padding: 20px 30px;
            border-radius: 24px;
            margin: 0 10px;
            height: 60px;
        }

        .date {
            margin-left: 6px;

            span {
                padding: 0 3px;
            }
        }

        .greetings {
            background: #fff;
            color: #000000;
            border: 1px solid #424242;
        }
    }
`;
