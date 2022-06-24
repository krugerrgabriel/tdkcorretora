import styled from 'styled-components';

import { Body, Container } from '../../styles/elements';

export const NewBody = styled(Body)`
    color: ${(props) => props.theme.white};

    position: relative;

    span{
        font-size: 71px;
        font-weight: 300;
        
        line-height: 94px;

        letter-spacing: 10px;
    }

    p{
        font-size: 148px;
        font-weight: 800;

        line-height: 155px;

        text-align: center;

        margin-bottom: 0;
    }

    @media(max-width: 1920px) {
        span {
            font-size: 71px;
        }
        p{
            font-size: 124px;
        }
    }

    @media(max-width: 1280px) {
        span {
            font-size: 52px;
        }

        p{
            font-size: 118px;

            line-height: 102px;
        }
    }
`;

export const NewContainer = styled(Container)`
    z-index: 2;
    
    align-items: center;
`;