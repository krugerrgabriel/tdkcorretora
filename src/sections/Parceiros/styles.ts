import styled from 'styled-components';

import Image from "../../components/Image";

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.3);

    padding: 8px 12px;

    border-radius: 3px;

    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
`;

export const CompanyImage = styled(Image)`
    width: 225px;
    height: auto;
`;