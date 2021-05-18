import styled from 'styled-components';

import Image from '../../../../components/Image';

import { Container } from "../../../../styles/elements";

export const Body = styled.div`
    background-color: ${(props) => props.theme.yellow};

    width: 100vw;
    height: 92px;

    position: fixed;
    left: 0;
    right: 0;
`;

export const NewContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    height: 92px;

    z-index: 500;
`;

export const NewImage = styled(Image)``;

export const Links = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Icon = styled(Image)`
    margin: 0 12px;

    height: 24px;
    width: auto;

    cursor: pointer;
`;