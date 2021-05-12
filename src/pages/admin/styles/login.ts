import styled from 'styled-components';

import Image from "../../../components/Image";

import { Button } from '../../../styles/elements';

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    div.first{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${(props) => props.theme.yellow};

        width: 500px;
        height: 500px;
    }

    div.second{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: ${(props) => props.theme.white};

        width: 525px;
        height: 400px;
    }
`;

export const InputBox = styled.div`
    width: 70%;
    height: 48px;
`;

export const MiniIcon = styled(Image)``;

export const ButtonEdited = styled(Button)``;