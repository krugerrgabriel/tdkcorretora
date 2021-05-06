import styled from 'styled-components';

import Image from '../../components/Image';

import { INewImage } from './interfaces';

import { Body, Title } from '../../styles/elements';

export const NewBody = styled(Body)`
    background-color: ${(props) => props.theme.gray};
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(2){
        padding-right: 12px;
    }
    &:nth-child(3){
        margin-top: 24px;
        padding-right: 12px;
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
        }

        span{
            color: ${(props) => props.theme.white};

            font-size: 20px;
            font-weight: 400;
        }
    }
`;

export const NewImage = styled(Image)<INewImage>`
    width: 100%;
    height: auto;

    ${(props) => props.margin ? 'margin-top: 12px;' : null};
`;