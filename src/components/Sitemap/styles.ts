import styled from 'styled-components';

import { IOption } from './interfaces';

export const Corpse = styled.div`
    background-color: ${(props) => props.theme.black};

    position: fixed;
    left: calc(100vw - 54px);

    height: 100%;
    width: 224px;

    z-index: 600;

    transition: 0.6s;

    &:hover{
        left: calc(100vw - 224px);
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    position: relative;

    transition: 0.6s;
`;

export const Option = styled.div<IOption>`
    display: flex;
    align-items: center;

    // Active
    opacity: ${(props) => props.active ? '1' : '0.5'};
    ${(props) => props.active ? `background-color: ${props.theme.yellow}` : null};
    ${(props) => props.active ? 'width: 82px;' : null};
    ${(props) => props.active ? 'height: 56px;' : 'height: 52px;'};
    margin: ${(props) => props.active ? '2px 0 0 -12px;' : '2px 0;'};
    width: 100%;

    cursor: pointer;

    transition: 0.4s;

    span{
        color: ${(props) => props.theme.white};    

        font-size: 16px;
        font-weight: 700;

        text-transform: uppercase;

        margin: 0 0 0 12px;
    }

    .image{
        margin: ${(props) => props.active ? '0 24px 0 18px;' : '0 24px 0 14px'};

        width: 28px;
        height: auto;
    }

    &:hover{
        opacity: ${(props) => props.active ? '1' : '0.75'};
    }
`;