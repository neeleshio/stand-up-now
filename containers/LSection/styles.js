import styled from 'styled-components';

export const StyledLSection = styled.section`
    /* width: 70%; */

    .header-container {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        .hi-text {
            font-size: 40px;
            display: flex;
            flex-direction: column;
            /* margin-left: 30px; */
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

    .bubble-card-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin-top: 50px;
        background: #e7ff55;
        color: #000000;
        padding: 50px;
        border-radius: 50px;
    }

    .graph-container {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }

    .graph1 {
        background: #d3a6ff;
        width: 50%;
        border-radius: 30px;
        color: #000000;
        position: relative;

        .activity {
            display: block;
            padding: 20px 20px;
            color: #1c1b1b;
            font-size: 12px;
        }

        .no-data {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid #424242;
            padding: 15px 20px;
            border-radius: 20px;
            background: #000000;
            color: #ffffff;
            font-size: 12px;
        }
    }

    .graph {
        background: #181818;
        padding: 0px 30px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        height: 200px;
        width: 47.5%;

        svg {
            width: 180px;
        }

        .graph-img {
            animation: ${(props) => !props.pause && 'rotate-animation 40s infinite linear'};

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
            .btn-content {
                display: flex;
            }

            button {
                border: 1px solid #424242;
                padding: 15px 20px;
                border-radius: 20px;
                background: #000000;
                display: flex;
                align-items: center;

                svg {
                    width: 15px;
                    margin-right: 10px;
                }

                &:first-child {
                    margin-right: 10px;
                    width: 116px;
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
            background: none;
            cursor: pointer;
        }

        .left-arrow {
            svg {
                transform: rotate(180deg);
            }
        }
    }
`;
