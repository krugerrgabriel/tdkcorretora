import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Image from '../../components/Image';

import { IAnswer } from './interfaces';

export const NewContainer = styled(Container)<{ alignitems?: Boolean; }>`
    display: flex;
    ${(props) => props.alignitems ? 'align-items: center;' : null};
    justify-content: center;
    flex-direction: column;

    height: 100vh;

    h1{
        color: ${(props) => props.theme.white};

        font-size: 58px;
        font-weight: 700;

        text-align: center;
        text-transform: uppercase;
        text-shadow: 0 4px 6px rgba(0, 0, 0, 0.10);
    }

    h2{
        color: ${(props) => props.theme.white};

        font-size: 22px;
        font-weight: 400;

        line-height: 36px;

        text-align: left;
    }

    @media(max-width: 1280px) {
        h2{
            font-size: 18px;

            line-height: 28px;
        }
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    background-color: #ACACAC;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    height: 350px;

    margin: 0 18px;
    padding: 42px 64px;

    p{
        color: ${(props) => props.theme.white};

        font-size: 32px;
        font-weight: 700;

        line-height: 38px;
    }

    span{
        color: ${(props) => props.theme.white};

        font-size: 18px;
        font-weight: 600;

        line-height: 22px;

        text-align: center;
    }
`;

export const BadgeBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    padding: 0 12px;
`;
export const Badge = styled.div`
    background-color: ${(props) => props.theme.yellow};

    display: flex;
    align-items: center;

    flex: 1 0 20%;

    height: 102px;

    margin: 12px 0;

    padding: 10px 8px;

    border-radius: 2px;

    div{
        color: ${(props) => props.theme.white};

        margin-left: 12px;

        p{
            font-size: 16px;
            font-weight: 400;

            text-align: center;

            line-height: 22px;

            margin: 0;
        }
    }

    @media(max-width: 1280px) {
        &{
            height: 86px;

            margin: 10px 0;

            padding: 8px 6px;
        }

        div{
            p{
                font-size: 15px;

                line-height: 21px;
            }
        }
    }
`;
export const BadgeImage = styled(Image)`
    height: 42px;
    width: auto;

    border-radius: 2px;
`;

export const Item = styled.div`
    background-color: rgba(0, 0, 0, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 16px 0 16px;
    padding: 12px 0;

    width: 100%;

    border-bottom: 3px solid ${(props) => props.theme.yellow};

    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);

    p.content{
        color: ${(props) => props.theme.white};

        font-size: 18px;
        font-weight: 400;

        height: 196px;

        line-height: 28px;

        margin: 24px 18px 18px 18px;
    }
    div.content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        height: 196px;

        margin: 24px 18px 18px 18px;
    }
    div.content p{
        color: ${(props) => props.theme.white};

        font-size: 18px;
        font-weight: 400;

        line-height: 28px;
    }

    @media(max-width: 1280px) {
        & {
            width: 95%;
        }
        p{
            font-size: 14px;

            margin: 16px 8px 8px 8px;
        }
    }
`;
export const ItemImage = styled(Image)`
    width: 100%;
    height: auto;

    margin-top: -12px;
`;
export const AddIcon = styled(Image)`
    margin-right: 24px;
`;

export const Answer = styled.span<IAnswer>`
    height: ${(props) => props.active ? '64px' : '0px'};
    font-size: ${(props) => props.active ? '14px' : '0px'};
`;

export const NewImage = styled(Image)``;

export const QuestionBox = styled.div`
    width: 100%;
    
    &:hover {
        cursor: pointer;
    }

    .faq {
        border-bottom: 2px solid ${(props) => props.theme.yellow};
    }

    .faq-title {
        background: none;
        color: ${(props) => props.theme.white};

        width: 100%;

        font-size: 22px;
        font-weight: 400;

        text-align: left;

        padding: 18px 72px 18px 12px;
        position: relative;

        border-radius: 2px;

        cursor: pointer;

        transition: 0.2s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.15);
        }

        &::after {
            content: '';
            display: block;

            width: 10px;
            height: 10px;

            border-left: 2px solid ${(props) => props.theme.yellow};
            border-bottom: 2px solid ${(props) => props.theme.yellow};

            position: absolute;
            top: 24px;
            right: 36px;

            transform: rotate(-45deg);
            transition: transform 0.3s ease-in-out;
        }

        &.active {
            background-color: rgba(0, 0, 0, 0.3);
            
            &::after {
                transform: rotate(135deg);
            }
        }
    }

    .faq-content {
        color: ${(props) => props.theme.white};
        background-color: rgba(0, 0, 0, 0.3);

        font-size: 19px;
        font-weight: 300;

        line-height: 26px;

        padding: 0 24px 24px 24px;
    }

    @media(max-width: 1280px) {
        .faq-title {
            font-size: 18px;
        }

        .faq-content {
            font-size: 17px;

            line-height: 22px;
        }
    }
`;