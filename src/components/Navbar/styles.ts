import styled from 'styled-components';

import Image from '../Image';
import { Container } from "../../styles/elements";

export const NewContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    position: fixed;
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
    }
`;