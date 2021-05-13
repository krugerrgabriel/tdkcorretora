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

        position: relative;

        p{
            color: ${(props) => props.theme.gray};
            
            font-size: 24px;
            font-weight: 700;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-bottom: 32px;
        }
    }
`;

export const InputBox = styled.div`
    width: 70%;
    height: 32px;

    margin-bottom: 22px;
`;

export const MiniIcon = styled(Image)`
    margin-right: 12px;
`;

export const ButtonEdited = styled(Button)`
    margin: 18px 0 8px 0;
`;

export const SocialLink = styled.a`
    position: absolute;

    bottom: 18px;

    cursor: pointer;

    &:nth-of-type(1){
        right: 20px;
    }

    &:nth-of-type(2){
        right: 76px;
    }
`;

export const SocialImage = styled(Image)`
    width: 32px;
    height: 32px;
`;