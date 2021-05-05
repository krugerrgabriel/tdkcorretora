import styled from 'styled-components';

import { Body, Container, Title } from '../../styles/elements';

import Image from '../../components/Image';

export const NewBody = styled(Body)`
    background-color: ${(props) => props.theme.gray};
`;

export const NewContainer = styled(Container)`

    h1{
        color: ${(props) => props.theme.white};

        font-size: 58px;
        font-weight: 700;

        text-align: center;
    }

    h2{
        color: ${(props) => props.theme.white};

        font-size: 24px;
        font-weight: 500;

        text-align: center;

        margin-bottom: 36px;
    }
`;

export const NewTitle = styled(Title)`
    margin: 0 0 12px 28px;
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

    flex: 1 0 28%;

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
    background-color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 78px 16px 0 16px;
    padding: 12px 0;

    width: 350px;

    border-radius: 3px;

    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);

    p{
        font-size: 28px;
        font-weight: 700;

        margin-top: 12px;
    }

    span{
        font-size: 22px;
        font-weight: 900;
    }
`;
export const ItemImage = styled(Image)`
    width: 275px;
    height: auto;

    margin-top: -82px;
`;

export const QuestionBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 0 26px;
`;
export const Question = styled.div`
    display: flex;
    flex-direction: row;

    border-bottom: 1px solid ${(props) => props.theme.white};

    padding: 12px 0;

    p{
        color: ${(props) => props.theme.white};

        font-size: 24px;
        font-weight: 400;
    }

    &:last-child{
        border-bottom: 0;
    }
`;
export const AddIcon = styled(Image)`
    margin-right: 24px;
`;

export const NewImage = styled(Image)``;