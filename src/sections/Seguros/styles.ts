import styled from 'styled-components';

import { Body } from '../../styles/elements';

import Image from "../../components/Image";

export const NewBody = styled(Body)`
    background-color: ${(props) => props.theme.background};
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    height: 500px;

    background-color: ${(props) => props.theme.white};

    border: 4px solid ${(props) => props.theme.primary};

    margin: 0 8px;
    padding: 36px 42px;

    p{
        text-transform: uppercase;
    }
`;

export const ImageIcon = styled(Image)`
    
`;