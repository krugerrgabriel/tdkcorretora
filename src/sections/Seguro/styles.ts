import styled from 'styled-components';

import { Container } from '../../styles/elements';

import Image from '../../components/Image';

import { IAnswer } from './interfaces';

export const NewContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: ${(props) => props.theme.white};

        font-size: 58px;
        font-weight: 700;

        text-align: center;
        text-transform: uppercase;
    }

    h2{
        color: ${(props) => props.theme.white};

        font-size: 22px;
        font-weight: 500;

        line-height: 32px;

        text-align: center;

        margin-top: 56px;

        max-width: 700px;
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

    height: 58px;

    margin: 12px 16px;
    padding: 10px 16px;

    border-radius: 2px;

    div{
        color: ${(props) => props.theme.white};

        margin-left: 12px;

        p{
            font-size: 20px;
            font-weight: 500;

            text-transform: uppercase;
        }

        span{
            font-size: 16px;
            font-weight: 400;
        }
    }
`;
export const BadgeImage = styled(Image)`
    height: 52px;
    width: auto;

    border-radius: 2px;
`;

export const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 12px;
`;
export const Item = styled.div`
    background-color: ${(props) => props.theme.yellow};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 78px 16px 0 16px;
    padding: 12px 0;

    width: 350px;

    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);

    p{
        color: ${(props) => props.theme.gray};
        font-size: 28px;
        font-weight: 700;

        margin-top: 12px;
    }

    span{
        color: ${(props) => props.theme.gray};
        
        font-size: 22px;
        font-weight: 900;
    }
`;
export const ItemImage = styled(Image)`
    width: 350px;
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
        border-bottom: 2px solid ${(props) => props.theme.white};
    }

    .faq-title {
        background: none;
        color: ${(props) => props.theme.white};

        width: 100%;

        font-size: 22px;
        font-weight: 500;

        text-align: left;

        padding: 18px 12px;
        position: relative;

        transition: 0.2s;
        
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }

        &::after {
            content: '';
            display: block;

            width: 10px;
            height: 10px;

            border-left: 2px solid ${(props) => props.theme.white};
            border-bottom: 2px solid ${(props) => props.theme.white};

            position: absolute;
            top: 24px;
            right: 36px;

            transform: rotate(-45deg);
            transition: transform 0.3s ease-in-out;
        }

        &.active {
            &::after {
                transform: rotate(135deg);
            }
        }
    }

    .faq-content {
        color: ${(props) => props.theme.white};

        font-size: 14px;

        line-height: 26px;

        padding: 0 24px 24px 24px;
    }
`;