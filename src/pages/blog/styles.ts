import styled from 'styled-components';
import { Link } from 'gatsby';
import { Row, Container } from 'react-bootstrap';
import Image from '../../components/Image';

export const NewLink = styled(Link)`
    text-decoration: none;
    color: unset;
    &:hover{
        color: unset;
    }
`;

export const NewContainer = styled(Container)<{ alignitems?: Boolean; }>`
    display: flex;
    ${(props) => props.alignitems ? 'align-items: center;' : null};
    justify-content: center;
    flex-direction: column;

    height: 100vh;
`;

export const NewRow = styled(Row)`
    ${(props) => props.flexRow ? 'display: flex;' : null};
    ${(props) => props.flexRow ? 'flex-direction: column;' : null};

    ${(props) => props.margin ? 'margin: 24px 0;' : null};
`;

export const Body = styled.div`
    background-color: ${(props) => props.theme.gray};

    width: 100%;
    height: 100%;

    position: relative;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    margin-top: 252px;

    ${NewRow}{
        z-index: 4;
    }
`;

export const ItemImage = styled.img`
    height: auto;
    width: 245px;

    margin-right: 24px;

    border-radius: 2px;

    cursor: pointer;

    transition: 0.3s;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 100%;

    margin: 12px 0;
    padding: 0 0 20px 0;

    border-bottom: rgba(255, 255, 255, 0.5) solid 1px;

    div.info{
        display: flex;
        justify-content: center;
        flex-direction: column;

        height: 80%;

        span{
            color: ${(props) => props.theme.yellow};

            font-weight: 500;
            font-size: 12px;

            letter-spacing: 0.5px;

            transition: 0.2s;
        }

        p{
            color: ${(props) => props.theme.white};

            font-size: 22px;
            font-weight: 600;

            margin: 8px 0 12px 0;

            transition: 0.2s;
        }

        strong{
            color: ${(props) => props.theme.white};

            font-size: 14px;
            font-weight: 500;

            opacity: 0.9;

            transition: 0.2s;
        }
    }

    ${NewLink}{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
        }

        ${NewLink}:hover{
            filter: brightness(90%);
        }

    &:hover{
        ${ItemImage}{
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        }
    }
`;