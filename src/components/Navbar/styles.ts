import styled from 'styled-components';

import Image from '../Image';

import { Container } from 'react-bootstrap';

export const NewContainer = styled(Container)<{ positionrelative: Boolean; }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    position: ${(props) => props.positionrelative ? 'relative' : 'fixed'};
    top: 24px;
    left: 0;
    right: 0;

    height: 64px;

    padding: 0 12px;

    z-index: 500;
`;

export const NewImage = styled(Image)`
    height: 62px;
    width: auto;

    cursor: pointer;
`;

export const Links = styled.div`
    a{
        margin: 0 14px;

        height: 24px;
        width: auto;
    }
`;