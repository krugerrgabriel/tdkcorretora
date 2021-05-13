import styled from 'styled-components';

import Image from '../components/Image';

import { IBody, IElement, ILayer, ITitle } from './interfaces';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 1140px;
    width: 100%;
    height: 100vh;

    margin: auto;

    position: relative;
`;

export const Body = styled.div<IBody>`
    ${(props) => props.color ? props.color == 'gray' ? `background-color: ${props.theme.gray};` : `background-color: ${props.theme.yellow};` : null};

    width: 100%;
    height: 100%;

    position: relative;
`;

export const FullImage = styled(Image)`
    position: absolute !important;

    top: 0;
    left: 0;

    width: 100vw;
    height: auto;

    z-index: 1;
`;

export const Element = styled(Image)<IElement>`
    position: absolute;

    ${(props) => props.top ? 'top: 0;' : 'bottom: 0;'}
    ${(props) => props.left ? 'left: 0;' : 'right: 0;'}

    width: calc((100vw - 1400px)/2);

    z-index: 2;
`;

export const Layer = styled.div<ILayer>`
    border-top: 100vh solid ${(props) => props.color == 'yellow' ? props.theme.yellow : props.theme.gray};
    border-right: 100vw solid transparent;

    position: absolute;
    top: 0;
    left: 0;

    ${(props) => props.position == 0 ? null : props.position == 1 ? 'transform: rotate(180deg);' : 'transform: scaleX(-1);'}
`;

export const SecondLayer = styled.div`
    background-color: ${(props) => props.theme.yellow};

    clip-path: polygon(50% 90%, 100% 60%, 100% 100%, 0 100%, 0 60%);

    width: 100vw;
    height: 100vh;

    position: absolute;
    bottom: 0;
    left: 0;
`;

export const Title = styled.p<ITitle>`
    color: ${(props) => props.theme.white};

    font-size: 38px;
    font-weight: 700;

    line-height: 50px;

    text-transform: uppercase;

    ${(props) => props.margin ? `margin: ${props.margin}` : null};
`;

export const Button = styled.div<{ width: Number; color: String; onClick?: Function; }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    color: ${(props) => props.color == 'yellow' ? props.theme.yellow : props.color == 'gray' ? props.theme.gray : props.theme.white};

    border: 2px solid ${(props) => props.color == 'yellow' ? props.theme.yellow : props.color == 'gray' ? props.theme.gray : props.theme.white};
    border-radius: 3px;

    width: ${(props) => props.width ? `${props.width}%` : `50%`};

    font-size: 20px;
    font-weight: 500;

    padding: 6px 0;

    cursor: pointer;

    transition: 0.2s;

    &:active{
        transform: scale(0.985);
    }
    &:hover{
        color: ${(props) => props.color == 'yellow' || props.color == 'gray' ? props.theme.white : props.theme.yellow};
        background-color: ${(props) => props.color == 'yellow' ? props.theme.yellow : props.color == 'gray' ? props.theme.gray : props.theme.white};
    }
`;