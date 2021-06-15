import styled from 'styled-components';

import Image from '../../components/Image';

export const Corpse = styled.div<{ color?: String; halfWidth?: Boolean; }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid ${(props) => props.color ? props.color == 'white' ? props.theme.white : props.theme.gray : props.theme.white};
    border-radius: 3px;

    width: ${(props) => props.halfWidth ? '75%' : '100%'};
    min-height: 38px;
    height: auto;

    resize: vertical;

    margin-bottom: 24px;

    position: relative;

    input, select, textarea{
        background-color: transparent;

        color: ${(props) => props.color == 'white' ? props.theme.white : props.theme.gray};

        font-size: 16px;

        border: 0;
        margin: 0;
        outline: 0;

        appearance: none;

        padding: 4px 6px 4px 18px;

        width: 100%;

        margin-left: 36px;

        z-index: 200;
    }

    select{
        text-transform: uppercase;

        -webkit-appearance: none;
        -moz-appearance: none;

        background: transparent;
        background-image: url("https://www.tdkcorretora.com.br/assets/img/tdkcorretora_seguros_down-icon.svg");
        background-repeat: no-repeat;
        background-position-x: 95%;
        background-position-y: 5px;
        background-size: 20px 20px;

        color: ${(props) => props.theme.white};

        font-weight: 400;
    }
    select *{
        background-color: ${(props) => props.theme.yellow};
    }

    textarea{
        height: 100%;
        min-height: 32px;
        max-height: 400px;
    }

    option{
        color: ${(props) => props.theme.black};
        
        text-transform: uppercase;
    }
    option:disabled{
        color: ${(props) => props.theme.gray};
    }

    &:nth-child(2){
        margin-left: 24px;
    }
`;

export const InputText = styled.span<{ active: boolean; color?: String; layer?: Boolean; contact?: Boolean; }>`
    background-color: ${(props) => props.contact ? 'transparent' : props.layer ? props.color ? props.color == 'white' ? props.theme.yellow : props.theme.white : props.theme.yellow : props.theme.gray};

    color: ${(props) => props.color ? props.color == 'white' ? props.theme.white : props.theme.gray : props.theme.white};

    font-size: ${(props) => props.active ? '14px' : '16px'};
    font-weight: 500;

    position: absolute;

    left: 42px;
    top: ${(props) => props.contact ? props.active ? '-26px' : '0' : props.active ? '-18px' : '-8px'};

    padding: 2px 4px;

    cursor: context-menu;

    z-index: 100;

    transition: 0.2s;
`;

export const InputIcon = styled(Image)`
    width: 20px;
    height: auto;

    position: absolute;
    top: 6px;
    left: 12px;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    ${Corpse}{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 12px;

        color: ${(props) => props.theme.white};

        font-size: 18px;
        font-weight: 500;

        opacity: 0.75;
    }

    input{
        display: none;
    }
`;

export const Layer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.gray};

    border-radius: 3px;

    width: 50%;
    height: 38px;

    margin-bottom: 24px;

    font-size: 20px;
    font-weight: 500;
`;

export const Placeholder = styled.span`
    text-overflow: ellipsis;

    white-space: nowrap;

    overflow: hidden;

    width: 325px;
`;