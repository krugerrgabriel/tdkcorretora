import styled from 'styled-components';

import { Body, Container } from '../../styles/elements';
import Image from '../../components/Image';

export const NewBody = styled(Body)`
    color: ${(props) => props.theme.white};

    position: relative;

    span{
        font-size: 71px;
        font-weight: 400;
        
        line-height: 85px;
    }

    p{
        font-size: 155px;
        font-weight: 700;

        line-height: 155px;

        margin-bottom: 0;
    }
`;

export const NewContainer = styled(Container)`
    z-index: 2;
    
    align-items: center;
`;