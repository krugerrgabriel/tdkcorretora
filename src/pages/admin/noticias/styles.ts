import styled from 'styled-components';
import { Table } from "react-bootstrap";

import Image from '../../../components/Image';

export const NewTable = styled(Table)`
    background-color: ${(props) => props.theme.white};

    thead tr th{
        font-size: 16px;
        font-weight: 600;
        
        text-transform: uppercase;
        text-align: center;
    }
    
    td{
        vertical-align: middle;
        padding: 0.5rem 1rem;

        &.overflow{
            overflow-y: scroll;
        }
    }

    td.actions{
        align-items: center;
        justify-content: center;
    }
`;

export const Icon = styled(Image)`
    width: 16px;
    height: 16px;

    cursor: pointer;
    margin: 0 2px;
`;