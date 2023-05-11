import styled from 'styled-components';

export const StyledNavbar = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-container {
        display: flex;

        .logo-text {
            font-size: 22px;
            font-weight: 600;
            color: #e7ff55;
            margin-left: 10px;
        }
    }

    button {
        height: 25px;
        background: none;
        border-width: 0px;
    }
`;
