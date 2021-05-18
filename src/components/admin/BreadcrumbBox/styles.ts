import styled from 'styled-components';
import { Breadcrumb } from "react-bootstrap";

export const NewBreadcrumb = styled(Breadcrumb)``;

export const Body = styled.div`
    position: absolute;

    top: 92px;
    left: 0;

    width: 100vw;
    height: 36px;

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