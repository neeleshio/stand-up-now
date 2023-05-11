import styled from 'styled-components';

export const StyledRSection = styled.section`
    background: #e7ff55;
    color: #000000;
    padding: 30px;
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

    .bubble-card-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 50px;
    }
`;
