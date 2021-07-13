import styled from 'styled-components';

import Image from '../../../components/Image';

import { INewImage } from '../interfaces';

export const Corpse = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    &:nth-child(2){
        margin-left: 64px;
    }
    
    div{
        display: flex;
        flex-direction: column;

        width: 100%;

        p{
            color: ${(props) => props.theme.yellow};

            font-size: 26px;
            font-weight: 800;

            margin-bottom: 8px;

            position: relative;

            display: flex;
            align-items: center;
        }

        span{
            color: ${(props) => props.theme.white};

            font-size: 20px;
            font-weight: 400;

            line-height: 30px;
        }

        &.space{
            margin-top: 36px;
        }

        @media(max-width: 1280px) {
            p{
                font-size: 22px;
            }
        }
    }

    @media(max-width: 1280px) {
        div{
            span{
                font-size: 16px;

                line-height: 24px;
            }

            &.space{
                margin-top: 18px;
            }
        }
    }
`;

export const TextIcon = styled(Image)`
    height: 32px;
    width: auto;

    position: absolute;
    left: -48px;
    bottom: 2px;

    &.valores{
        bottom: 3px;
    }

    @media(max-width: 1280px) {
        &{
            height: 28px;
        }
    }
`;

export const NewImage = styled(Image)<INewImage>`
    width: 100%;
    height: auto;

    ${(props) => props.margin ? 'margin-top: 12px;' : null};
`;