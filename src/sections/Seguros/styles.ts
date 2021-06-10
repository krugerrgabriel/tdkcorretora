import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

import Image from "../../components/Image";

export const NewRow = styled(Row)`
    z-index: 4;
`;

export const NewContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;

    *{
        z-index: 4;
    }
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

    height: 300px;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.3);

    border-radius: 0;

    padding: 18px;
    margin: 12px 0;

    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);

    position: relative;

    z-index: 4;

    div.front{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        height: 100%;

        p{
            color: ${(props) => props.theme.white};

            font-size: 28px;
            font-weight: 900;

            text-align: center;
            text-transform: uppercase;

            line-height: 28px;

            margin: 0;
            margin-top: 36px;
        }
    }

    div.back{
        color: ${(props) => props.theme.white};

        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        position: absolute;

        top: 32px;
        left: 24px;

        height: calc(100% - 64px);
        width: calc(100% - 48px);

        display: none;
        opacity: 0;

        font-size: 18px;
        font-weight: 500;

        text-align: center;

        line-height: 20px;

        div.point{
            strong{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
    
                color: ${(props) => props.theme.white};
    
                font-size: 22px;
                font-weight: 300;
    
                hr{
                    background-color: ${(props) => props.theme.gray};
    
                    width: 250px;
                    height: 1px;
    
                    margin: 4px 0;
                }
            }
        }

    }

    &:hover div.front{
        opacity: 0;
    }
    &:hover div.back{
        display: flex;
        opacity: 1;
    }
    &:hover div.back div.reveal{
        opacity: 1;
    }
`;

export const ImageIcon = styled(Image)`
    height: 96px;
    width: auto;

    margin-bottom: 6px;

    &.seguro-transporte{
        height: 88px;

        padding: 12px 0;
    }
`;