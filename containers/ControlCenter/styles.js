import styled from 'styled-components';

export const StyledControlCenter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: 40px 0;
    background: #e7ff55;
    color: #000000;
    padding: 40px;
    border-radius: 30px;

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;
