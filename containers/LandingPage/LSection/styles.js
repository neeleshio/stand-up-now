import styled from 'styled-components';

export const StyledLSection = styled.section`
    width: 70%;

    .header-container {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        .hi-text {
            font-size: 40px;
            display: flex;
            flex-direction: column;
            margin-left: 30px;
        }
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
            margin: 10px;
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

    .graph-container {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }

    .graph {
        background: #181818;
        padding: 0px 30px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        height: 200px;

        svg {
            width: 180px;
        }

        .graph-img {
            animation: rotate-animation 40s infinite linear;

            @keyframes rotate-animation {
                0% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(180deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }

        .graph-content {
            button {
                border: 1px solid #424242;
                padding: 15px 20px;
                border-radius: 20px;
                background: #000000;

                &:first-child {
                    margin-right: 10px;
                }
            }
        }

        .text-content {
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .text-1 {
                font-size: 20px;
            }

            .text-3 {
                font-size: 30px;
                font-weight: 600;
                margin: 10px 0 20px 0;

                .text-3-min {
                    font-size: 20px;
                    color: #8c8c8c;
                }
            }
        }
    }

    .article-container {
        display: flex;
        margin-top: 50px;

        .right-arrow,
        .left-arrow {
            border: 0.5px solid #fff;
            padding: 10px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .left-arrow {
            svg {
                transform: rotate(180deg);
            }
        }
    }
`;
