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

    background-color: rgba(255, 255, 255, 0.75);

    padding: 24px 0;

    border-radius: 3px;

    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
`;

export const CompanyImage = styled(Image)`
    width: 225px;
    height: auto;
`;