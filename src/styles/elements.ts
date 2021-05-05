import styled from 'styled-components';

import Image from '../components/Image';

import { IElement, ILayer } from './interfaces';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 1400px;
    width: 100%;
    height: 100vh;

    margin: auto;

    position: relative;
`;

export const Body = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
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

export const Title = styled.p`
    color: ${(props) => props.theme.white};

    font-size: 38px;
    font-weight: 700;

    line-height: 50px;
`;