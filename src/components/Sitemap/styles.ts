import styled from 'styled-components';

import { IOption } from './interfaces';

export const Corpse = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    right: 24px;
    top: 0;
    bottom: 0;

    z-index: 600;
`;

export const Option = styled.div<IOption>`
    display: flex;
    align-items: center;
    
    color: ${(props) => props.theme.white};

    font-size: 16px;
    font-weight: 700;

    opacity: ${(props) => props.active ? '1' : '0.3'};

    margin: 2px 0;

    transition: 0.6s;

    div{
        background-color: ${(props) => props.theme.white};

        width: 12px;
        height: 12px;

        margin: 0 4px 1px 0;
    }
`;