import styled from 'styled-components';

export const StyledControlCard = styled.div`
    background: #181818;
    padding: 0px 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    height: 220px;
    width: 40%;

    svg {
        width: 180px;
    }

    .graph-img {
        animation: ${(props) => props.start && 'rotate-animation 40s infinite linear'};

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
                width: 100px;
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

    @media screen and (max-width: 1254px) {
        .graph-content {
            .btn-content {
                flex-direction: column;

                button:first-child {
                    margin-bottom: 8px;
                }
            }
        }
    }

    @media screen and (max-width: 1080px) {
        margin-bottom: 20px;
        width: 100%;
        justify-content: center;
        height: 100%;

        .graph-content {
            .btn-content {
                flex-direction: row;

                button:first-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    @media screen and (max-width: 520px) {
        padding: 20px;

        .graph-content {
            .btn-content {
                flex-direction: column;

                button {
                    width: 100%;
                }

                button:first-child {
                    margin-bottom: 8px;
                }
            }
        }
    }

    @media screen and (max-width: 440px) {
        flex-direction: column;
        padding-top: 0;

        .graph-content {
        }

        .text-content {
            margin-left: 0;
            flex-direction: row;
            align-items: center;

            .text-1 {
                margin-right: 10px;
            }
        }
    }
`;
