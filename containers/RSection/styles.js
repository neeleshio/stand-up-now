import styled from 'styled-components';

export const StyledRSection = styled.section`
    /* background: #e7ff55; */
    color: #000000;
    /* padding: 30px; */
    width: 27.5%;
    border-radius: 50px;

    .user-profile-container {
        position: relative;

        .bubble-bg {
            position: absolute;
        }

        .img-username-conatiner {
            padding-top: 60px;
        }

        .img-container {
            width: 160px;
            border: 2px solid #000000;
            border-radius: 30px;
            margin: 0 auto;
            display: grid;
            place-items: center;
            overflow: hidden;
        }

        .user-name {
            text-align: center;
            margin-top: 25px;
            font-size: 22px;
            font-weight: 600;
        }
    }

    .graph-container {
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
    }
`;
