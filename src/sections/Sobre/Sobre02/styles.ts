import styled from 'styled-components';

import { Container, Col } from 'react-bootstrap';
import Image from '../../../components/Image';

export const NewCol = styled(Col)``;

export const NewContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    ${NewCol}{
        margin: 12px 0;
    }
`;

export const Employee = styled.div`
    height: 100%;
    width: 165px;

    position: relative;

    border: 3px solid var(--white);
    border-radius: 2px;

    div.reveal{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: rgba(255, 255, 255, 0.85);

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        transition: 0.2s;

        opacity: 0;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            padding: 12px;

            width: 100%;
            height: 100%;

            text-align: center;

            p{
                color: ${(props) => props.theme.gray};

                font-size: 20px;
                font-weight: 900;

                line-height: 20px;
            }

            span{
                color: ${(props) => props.theme.gray};
                
                font-size: 14px;
                font-weight: 500;

                line-height: 16px;

                letter-spacing: 0.1px;

                margin-top: 6px;
            }
        }
    }

    &:hover{
        div.reveal{
            opacity: 1;
        }
    }
`;

export const EmployeeImage = styled(Image)`
    width: 100%;
    height: auto;
`;