import styled from 'styled-components';

import { Body, Container } from '../../styles/elements';
import Image from '../../components/Image';

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

        margin-bottom: 0;
    }
`;

export const NewContainer = styled(Container)`
    z-index: 2;
    
    align-items: center;
`;