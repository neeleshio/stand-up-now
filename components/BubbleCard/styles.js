import styled from 'styled-components';

export const StyledBubbleCard = styled.div`
    background: #dbf052;
    padding: 30px 30px 40px 30px;
    margin: 8px;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    box-shadow: 0 16px 48px 0 rgba(0, 0, 0, 0.2);

    .value {
        font-size: 22px;
        font-weight: 600;
        margin-top: 12px;
        /* display: flex;
        align-items: center; */

        button {
            background: none;
            border: none;
            cursor: pointer;

            svg {
                margin-left: 5px;
                margin-bottom: -2px;
                width: 16px;
            }
        }

        .suffix {
            font-size: 16px;
            margin-left: 5px;
            color: #181818;
            padding-right: 20px;
        }
    }

    .name {
        margin-top: 8px;
        font-size: 14px;
        color: #444b0e;
    }
`;
