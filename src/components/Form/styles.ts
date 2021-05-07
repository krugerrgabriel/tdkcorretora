import styled from 'styled-components';

import Image from '../../components/Image';

export const Corpse = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid ${(props) => props.theme.white};
    border-radius: 3px;

    width: 100%;
    min-height: 32px;
    height: 100%;

    margin-bottom: 24px;

    position: relative;

    input, select, textarea{
        background-color: transparent;

        color: ${(props) => props.theme.white};

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
        background-image: url("http://www.tdkcorretora.com.br/assets/img/tdkcorretora_down-icon.svg");
        background-repeat: no-repeat;
        background-position-x: 95%;
        background-position-y: 5px;
        background-size: 20px 20px;
    }

    textarea{
        resize: vertical;

        height: 20px;
        min-height: 20px;
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

export const InputText = styled.span<{ active: boolean }>`
    background-color: ${(props) => props.theme.yellow};

    color: ${(props) => props.theme.white};

    font-size: ${(props) => props.active ? '14px' : '16px'};
    font-weight: 500;

    position: absolute;

    left: 42px;
    top: ${(props) => props.active ? '-18px' : '-8px'};

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