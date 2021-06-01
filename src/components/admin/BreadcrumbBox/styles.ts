import styled from 'styled-components';
import { Breadcrumb } from "react-bootstrap";

import Image from '../../Image';

export const NewBreadcrumb = styled(Breadcrumb)``;

export const Body = styled.div<{ fixed?: Boolean; }>`
    position: ${(props) => props.fixed ? 'fixed' : 'absolute'};

    top: 92px;
    left: 0;

    width: 100vw;
    height: 36px;

    z-index: 500;

    ${NewBreadcrumb}{
        background-color: ${(props) => props.theme.white};

        font-weight: 500;
        
        padding: 0 24px;

        height: 100%;

        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

        ol{
            display: flex;
            align-items: center;

            height: 100%;
        }
    }
`;

export const AddIcon = styled(Image)`
    position: absolute;
    right: 24px;
    top: 6px;
    
    width: 22px;
    height: auto;
`;