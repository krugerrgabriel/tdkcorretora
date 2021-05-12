import styled from 'styled-components';

import { Link } from 'gatsby';

import Image from '../../components/Image';

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`;

export const Card = styled(Link)`
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};

    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    width: 25%;

    margin: 0 18px;

    border-radius: 7px 7px 4px 4px;

    &:first-child,
    &:last-child{
        margin: 0;
    }
`;

export const CardImage = styled(Image)`
    width: 100%;
    height: auto;

    border-radius: 5px 5px 0 0;
`;

export const CardInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    height: 150px;

    padding: 24px 18px;

    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);

    p{
        font-size: 18px;
        font-weight: 700;

        text-align: center;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    span{
        font-size: 16px;
        font-weight: 400;

        text-align: center;
    }

    strong{
        color: ${(props) => props.theme.gray};

        font-size: 14px;
        font-weight: 500;

        text-align: center;
    }
`;