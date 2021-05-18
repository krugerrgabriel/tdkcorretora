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

    &:nth-child(1){
        padding-right: 12px;

        margin-right: 24px;
        margin: 36px 36px 0 0;
    }
    &:nth-child(2){
        padding-right: 12px;

        margin-left: 48px;
    }
    
    div{
        display: flex;
        flex-direction: column;

        max-width: 600px;

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
`;

export const NewImage = styled(Image)<INewImage>`
    width: 100%;
    height: auto;

    ${(props) => props.margin ? 'margin-top: 12px;' : null};
`;