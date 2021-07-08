import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'gatsby';

export const NewContainer = styled(Container)<{ alignitems?: Boolean; }>`
    display: flex;
    ${(props) => props.alignitems ? 'align-items: center;' : null};
    justify-content: center;
    flex-direction: column;

    height: 100vh;
`;

export const NewRow = styled(Row)``;

export const NewCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    ${NewRow}{
        z-index: 4;
    }
`;

export const Card = styled(Link)`
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};

    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    width: 100%;

    margin: 0 18px;

    border-radius: 7px 7px 4px 4px;

    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);

    transition: 0.2s;

    &:first-child,
    &:last-child{
        margin: 0;
    }

    &:hover{
        box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);

        color: ${(props) => props.theme.gray};
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;

    border-radius: 5px 5px 0 0;
`;

export const CardInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    height: auto;

    padding: 24px 18px;

    p{
        font-size: 20px;
        font-weight: 700;

        line-height: 24px;

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

export const MoreLink = styled(Link)`
    color: ${(props) => props.theme.yellow};

    display: flex;
    justify-content: flex-end;

    font-size: 22px;
    font-weight: 400;

    text-align: center;

    margin-top: 48px;

    transition: 0.2s;

    &:hover{
        color: ${(props) => props.theme.yellow};

        filter: brightness(85%);

        text-decoration: underline;
    }
`;