import styled from 'styled-components';

import { Body, Title } from '../../styles/elements';

import Image from "../../components/Image";

export const NewBody = styled(Body)`
    background-color: ${(props) => props.theme.gray};
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const NewTitle = styled(Title)`
    margin: 0 0 12px 18px;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    height: 475px;

    background-color: ${(props) => props.theme.white};

    border: 4px solid ${(props) => props.theme.yellow};

    margin: 0 18px;
    padding: 36px 42px;

    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);

    p{
        color: ${(props) => props.theme.gray};

        font-size: 28px;
        font-weight: 900;

        margin-bottom: -12px;

        text-transform: uppercase;
    }

    span{
        color: ${(props) => props.theme.gray};

        font-size: 16px;
        font-weight: 400;

        text-align: center;

        line-height: 18px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;

        height: 54px;

        margin: -4px 0 12px 0;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        strong{
            color: ${(props) => props.theme.gray};

            font-size: 22px;
            font-weight: 300;
        }

        hr{
            background-color: ${(props) => props.theme.gray};

            width: 250px;
            height: 1px;

            margin: 8px 0;
        }
    }
`;

export const ImageIcon = styled(Image)`
    height: 96px;
    width: auto;

    margin-bottom: 6px;
`;