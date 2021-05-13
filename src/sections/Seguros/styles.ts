import styled from 'styled-components';

import Image from "../../components/Image";

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

    height: 500px;

    background-color: ${(props) => props.theme.white};

    border: 4px solid ${(props) => props.theme.yellow};

    margin: 0 18px;
    padding: 36px 42px;

    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);

    position: relative;

    div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        height: 100%;

        p{
            color: ${(props) => props.theme.gray};

            font-size: 28px;
            font-weight: 900;

            text-align: center;

            margin-bottom: -12px;

            height: 68px;

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
            -webkit-line-clamp: 1; /* number of lines to show */
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
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                color: ${(props) => props.theme.gray};

                font-size: 22px;
                font-weight: 300;

                hr{
                    background-color: ${(props) => props.theme.gray};

                    width: 250px;
                    height: 1px;

                    margin: 8px 0;
                }
            }
        }
    }

    div.back{
        color: ${(props) => props.theme.gray};

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
    }

    &:hover div:nth-child(1){
        opacity: 0;
    }
    &:hover div.back{
        display: flex;
        opacity: 1;
    }
`;

export const ImageIcon = styled(Image)`
    height: 96px;
    width: auto;

    margin-bottom: 6px;

    &.seguro-transporte{
        height: 72px;

        padding: 12px 0;
    }
`;