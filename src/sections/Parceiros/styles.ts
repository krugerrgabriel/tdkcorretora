import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Image from "../../components/Image";

export const NewContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
`;

export const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-color: rgba(255, 255, 255);

    padding: 24px 0;

    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);

    cursor: pointer;

    transition: 0.2s;

    &:hover{
        box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

export const CompanyImage = styled(Image)`
    width: 200px;
    height: auto;
`;