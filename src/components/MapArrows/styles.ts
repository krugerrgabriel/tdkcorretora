import styled from 'styled-components';

import Image from '../Image';

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    position: fixed;
    top: 21%;
    left: calc(100vw - 196px);

    height: 64px;
    width: 48px;

    transition: 0.2s;

    z-index: 599;
`;

export const ArrowImage = styled(Image)`
    cursor: pointer;

    width: 100%;
    height: auto;

    transition: 0.2s;

    &:hover{
        transform: scale(1.02);
    }
    &:active{
        transform: scale(0.99);
    }
`;