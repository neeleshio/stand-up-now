import styled from 'styled-components';

export const StyledSrcoll = styled.div`
    height: 120px;
    width: 80%;
    background: #dbef52;
    line-height: 30px;
    overflow: scroll;
    position: absolute;
    border-radius: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    #scroll {
        line-height: 30px;
        margin-left: 0;
        padding: 0 0;
    }

    #scroll li {
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        color: #70781e;
    }
`;
