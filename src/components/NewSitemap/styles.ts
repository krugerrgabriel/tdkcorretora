import styled from 'styled-components';

import { IOption } from './interfaces';

export const Corpse = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: ${(props) => props.theme.black};

    position: fixed;
    left: calc(100vw - 54px);

    height: 100%;

    z-index: 600;
`;

export const Option = styled.div<IOption>`
    display: flex;
    align-items: center;
    
    color: ${(props) => props.theme.white};    

    font-size: 16px;
    font-weight: 700;

    text-transform: uppercase;

    // Active
    opacity: ${(props) => props.active ? '1' : '0.5'};
    ${(props) => props.active ? `background-color: ${props.theme.yellow}` : null};
    ${(props) => props.active ? 'width: 82px;' : null};
    ${(props) => props.active ? 'height: 56px;' : 'height: 52px;'};
    margin: ${(props) => props.active ? '2px 0 0 -12px;' : '2px 0;'};

    cursor: pointer;

    transition: 0.4s;

    .image{
        margin: ${(props) => props.active ? '0 24px 0 14px;' : '0 14px'};

        width: 28px;
        height: auto;
    }

    &:hover{
        opacity: ${(props) => props.active ? '1' : '0.75'};
    }
`;