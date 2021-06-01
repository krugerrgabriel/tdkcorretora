import styled from 'styled-components';
import { Container } from "react-bootstrap";

import Image from '../../Image';

export const NewContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
`;

export const Body = styled.div`
    background-color: ${(props) => props.theme.yellow};

    width: 100vw;
    height: 92px;

    position: fixed;
    left: 0;
    right: 0;

    z-index: 500;
`;

export const NewImage = styled(Image)``;

export const Links = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Icon = styled(Image)`
    height: 24px;
    width: auto;

    cursor: pointer;

    &:last-child{
        margin-left: 24px;
    }
`;